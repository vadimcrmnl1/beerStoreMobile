import emailjs from "@emailjs/browser";
import {onValue, ref} from "firebase/database";
import React, {FC, useEffect} from "react";
import {Controller, useForm} from "react-hook-form";
import {Text, TextInput, TouchableOpacity, View} from "react-native";
import {Dropdown} from "react-native-element-dropdown";
import {useDispatch} from "react-redux";
import {setAppIsLoadingAC} from "../../../../../app/actions";
import {db} from "../../../../../app/firebase";
import {useAppSelector} from "../../../../../app/hooks";
import {removeCartAC, setOrderSentAC} from "../../../../../features/cart/model/actions";
import {removeDrinksStateAC} from "../../../../../features/drinks/model/actions";
import {ProductType} from "../../../../../features/drinks/model/drinks-reducer";
import {fetchShopsAC} from "../../../../../features/shops/model/actions";
import {selectShops} from "../../../../../features/shops/model/shop-selectors";
import {removeSnacksStateAC} from "../../../../../features/snacks/model/actions";
import {cartStyles} from "../../../../styles/styles";

type FormData = {
    name: string
    phone: number
    address: string
    comment?: string
    totalPrice: number
    shop: string
    products: string[]
}
type FormPropsType = {
    setOpen: (open: boolean) => void
    products: ProductType[]
    totalCartPrice: number
}
export const Form: FC<FormPropsType> = ({setOpen, products, totalCartPrice}) => {
    const dispatch = useDispatch()
    const shops = useAppSelector(selectShops)
    const shopsData = shops.map(el => {
        return {value: el.city + ', ' + el.address}
    })

    const {control, handleSubmit, formState: {errors}} = useForm<FormData>({
        defaultValues: {
            shop: '',
            name: '',
            phone: 0,
            address: '',
            comment: '',
            totalPrice: totalCartPrice,
            products: products.map(el => el.title + ', ' + el.totalAmount + ' уп(грам)')

        }
    })
    useEffect(() => {
        onValue(ref(db), snapshot => {
            const data = snapshot.val()
            dispatch(fetchShopsAC(data.shops))
        })
    }, [shops.length])

    const onSubmit = (data: FormData, e: any) => {
        e.preventDefault()
        console.log(data)
        dispatch(setAppIsLoadingAC(true))
        setOpen(false)
        emailjs.sendForm('service_bd4iw0b', 'template_h4api22', e.target, '2gFQR1rMn1j28Vvml')
            .then((res) => {
                if (res.status === 200) {
                    dispatch(setOrderSentAC(true))
                    dispatch(removeCartAC([], 0, 50))
                    dispatch(removeSnacksStateAC())
                    dispatch(removeDrinksStateAC())
                }
            })
            .catch(rej => {
                console.error(rej)
            })
            .finally(() => {
                dispatch(setAppIsLoadingAC(false))
            })
    }
    return (
        <View style={{width: '90%'}}>
            <Controller control={control} rules={{required: true}} name={'shop'}
                        render={({field: {onBlur, onChange, value}}) => (
                            <Dropdown data={shopsData} labelField={'value'} valueField={'value'} onChange={onChange}
                                      onBlur={onBlur} value={value} style={cartStyles.input} showsVerticalScrollIndicator={false}
                                      placeholder={'Віберите магазин'} placeholderStyle={cartStyles.inputText}
                                      itemTextStyle={cartStyles.inputText} itemContainerStyle={{backgroundColor: '#282424'}}
                                      selectedTextStyle={[cartStyles.inputText, {color: '#e5e5e5'}]}/>)}/>
            {errors.shop?.type === 'required' &&
                <Text style={{color: '#e5e5e5', fontSize: 14}}>Будь ласка, вібери магазин</Text>}

            <Controller control={control}
                        rules={{required: true, minLength: 2, maxLength: 40}}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput maxLength={40}
                                       style={cartStyles.input}
                                       placeholder={'Ваше ім\'я'} placeholderTextColor={'#e58038'}
                                       onBlur={onBlur}
                                       onChangeText={onChange}
                                       value={value}
                            />
                        )}
                        name={'name'}/>
            {errors.name &&
                <Text style={{color: '#e5e5e5', fontSize: 14,}}>Будь ласка, введіть
                    ім'я</Text>}

            <Controller control={control}
                        rules={{required: true, minLength: 10, maxLength: 12}}
                        name={'phone'} render={({field: {onChange, onBlur, value}}) => (
                <TextInput maxLength={12} style={cartStyles.input} textContentType={'telephoneNumber'}
                           placeholder={'Ваш телефон через 380'} placeholderTextColor={'#e58038'}
                           onBlur={onBlur} onChangeText={onChange} value={value}/>
            )}/>
            {errors.phone && <Text style={{color: '#e5e5e5', fontSize: 14}}>Будь ласка, введіть номер
                    телефону через '380'</Text>}


            <Controller control={control} rules={{required: true, minLength: 5, maxLength: 50}}
                        render={({field: {onChange, onBlur, value}}) => (
                            <TextInput maxLength={50} style={cartStyles.input} placeholder={'Адреса доставки'}
                                       placeholderTextColor={'#e58038'} onBlur={onBlur} onChangeText={onChange}
                                       value={value}/>
                        )} name={'address'}/>
            {errors.address &&
                <Text style={{color: '#e5e5e5', fontSize: 14}}>Будь ласка, введіть адресу доставки</Text>}

            <Controller control={control} rules={{required: false, maxLength: 60}}
                        name={'comment'} render={({field: {onChange, onBlur, value}}) => (
                <TextInput maxLength={60} style={cartStyles.input} placeholder={'Коментар для співробітників'}
                           placeholderTextColor={'#e58038'} onBlur={onBlur} onChangeText={onChange}
                           value={value}/>
            )}/>
            {errors.comment && <Text style={{color: '#e5e5e5', fontSize: 14}}>Введіть коментар до 60 символов</Text>}

            {/*<Controller control={control} rules={{required: true}} name={'products'}*/}
            {/*render={({field: {value, onBlur, onChange}}) => (*/}
            {/*    <TextInput aria-hidden={true} value={value} onChangeText={onChange} onBlur={onBlur}/>*/}
            {/*)}/>*/}
            {/*<View style={{marginBottom: 40, height: 60}}>*/}
            {/*<Button color={'green'} title={'Submit'} onPress={handleSubmit(onSubmit)}/>*/}

            {/*</View>*/}
            <TouchableOpacity onPress={handleSubmit(onSubmit)} id={'Submit'}
                              style={[cartStyles.emptyCartButton, {backgroundColor: '#27a2e8', marginBottom: 30, margin: 0}]}>
                <Text style={{color: '#fff', fontSize: 26, textAlign: 'center', textTransform: 'uppercase'}}>Відправити
                    замовлення</Text>
            </TouchableOpacity>
        </View>
    )
}

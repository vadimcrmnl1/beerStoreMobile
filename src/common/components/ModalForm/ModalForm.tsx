import React, {useState} from "react";
import {Modal, ScrollView, Text, TouchableOpacity, View} from "react-native";
import {useAppSelector} from "../../../app/hooks";
import {selectProducts, selectTotalCartPrice} from "../../../features/cart/model/selectors";
import {cartStyles, styles} from "../../styles/styles";
import {Form} from "./components/Form/Form";
import {ModalButton} from "./components/ModalButton/ModalButton";

export const ModalForm = ({navigation}) => {
    const [open, setOpen] = useState<boolean>(false)
    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)
    const products = useAppSelector(selectProducts)
    const totalCartPrice = useAppSelector(selectTotalCartPrice)
    return (
        <View>
            <TouchableOpacity onPress={handleOpen} style={[cartStyles.emptyCartButton, {backgroundColor: '#27a2e8', margin: 0, marginTop: 5}]}>
                <Text style={{color: '#fff', fontSize: 26, textAlign: 'center', textTransform: 'uppercase'}}>Оформити
                    замовлення</Text>
            </TouchableOpacity>

            <Modal visible={open}>
                <View style={[styles.wrapper, {justifyContent: 'space-between'}]}>
                    <ScrollView showsVerticalScrollIndicator={false} style={{width: '90%'}}>
                        <View style={{width: '100%', marginBottom: 50}}>
                            <Text style={[styles.title, {fontSize: 28}]}>Ваше замовлення</Text>
                            {products.map(el => {
                                return <View key={el.id} style={{margin: 5}}>
                                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style={{color: '#fff'}}>{el.title}</Text>
                                        <Text
                                            style={{color: '#fff'}}>{el.totalAmount}{el.type === 'package' ? ' уп' : ' г'}</Text>
                                    </View>
                                    <Text style={{color: '#fff'}}>{el.totalPrice} грн</Text>
                                </View>
                            })}
                            <View>
                                <Text style={{color: '#fff', margin: 5}}>Сума замовлення: {totalCartPrice} грн</Text>
                            </View>
                            <ModalButton title={'В кошик'} color={'#fff'} backgroundColor={'red'} onPress={handleClose}/>

                        </View>
                    </ScrollView>

                    <Form setOpen={setOpen} products={products} totalCartPrice={totalCartPrice}/>
                </View>
            </Modal>
        </View>

    )
}

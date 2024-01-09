import React from "react";
import {Image, Text, View} from "react-native";
import {useAppSelector} from "../../../app/hooks";
import {selectProducts, selectTotalCartPrice} from "../../../features/cart/model/selectors";
import {ftrSt} from "../../styles/styles";
import menuIcon from './../../../common/images/footer/menuColor.png'
import cartIcon from './../../../common/images/icons/cart.png'

export const Footer = ({navigation}) => {
    const products = useAppSelector(selectProducts)
    const price = useAppSelector(selectTotalCartPrice)

    return (
        <View style={ftrSt.wrapper}>
            <View style={ftrSt.container}>
                <View style={ftrSt.menuBlock}>
                    <Image style={ftrSt.icon} source={menuIcon}/>
                    <Text style={ftrSt.menuText}>Меню</Text>
                </View>
                <View style={ftrSt.cartBlock} onTouchEnd={() => navigation.navigate('Кошик')}>
                    <View style={{display: 'flex', flexDirection: 'row'}}>
                        <Image style={ftrSt.icon} source={cartIcon}/>
                        {products.length ? <Text style={ftrSt.cartText}>{products.length}</Text> : null}

                    </View>
                    <Text style={[ftrSt.menuText]}>{price === 50 ? '0' : price} грн</Text>
                </View>
            </View>
        </View>

    )
}

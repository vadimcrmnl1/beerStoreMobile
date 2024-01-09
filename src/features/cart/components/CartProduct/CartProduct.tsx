import React from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {useDispatch} from "react-redux";
import {cartStyles} from "../../../../common/styles/styles";
import {setDrinksOrderedAC} from "../../../drinks/model/actions";
import {ProductType} from "../../../drinks/model/drinks-reducer";
import {decrementProductAC, incrementProductAC, removeProductAC} from "../../model/actions";

export const CartProduct: React.FC<ProductType> = ({
                                                       id,
                                                       image,
                                                       title,
                                                       amount,
                                                       price,
                                                       type,
                                                       totalPrice,
                                                       totalAmount
                                                   }) => {
    const dispatch = useDispatch()
    const handleRemoveProduct = () => {
        if (type === 'package' && totalAmount === 1 || type === 'weight' && totalAmount) {
            dispatch(removeProductAC(id, price))
            dispatch(setDrinksOrderedAC(false, id))
        } else {
            dispatch(decrementProductAC(id, amount, price))
        }
    }
    const handleIncProduct = () => {
        dispatch(incrementProductAC(id, amount, price))
    }
    return (
        <View style={cartStyles.wrapper}>
            <View style={cartStyles.container}>
                <View style={cartStyles.imageContainer}>
                    <Image style={{width: '100%', height: 100}} source={{uri: image}}/>
                </View>
                <View style={cartStyles.productContainer}>
                    <View style={cartStyles.textBlock}>
                        <Text style={cartStyles.text}>{title}</Text>
                        {/*<Text style={cartStyles.text}>{totalAmount} {type === 'package' ? 'уп' : 'г'}</Text>*/}
                        <Text style={[cartStyles.text, {fontSize: 16, textAlign: 'right'}]}>{totalPrice} грн</Text>
                    </View>
                        <View style={cartStyles.btnBlock}>
                            <TouchableOpacity style={cartStyles.btn} onPress={handleRemoveProduct}>
                                <Text style={cartStyles.btnText}> - </Text>
                            </TouchableOpacity>
                            <Text style={[cartStyles.text, {fontSize: 16, fontWeight: '600'}]}>{totalAmount} {type === 'package' ? 'уп' : 'г'}</Text>

                            <TouchableOpacity style={cartStyles.btn} onPress={handleIncProduct}>
                                <Text style={cartStyles.btnText}> + </Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
        </View>
    )
}

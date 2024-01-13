import React, {FC} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {useDispatch} from "react-redux";
import {addProductAC} from "../../../features/cart/model/actions";
import {setDrinksOrderedAC} from "../../../features/drinks/model/actions";
import {ProductType} from "../../../features/drinks/model/drinks-reducer";
import {setSnacksOrderedAC} from "../../../features/snacks/model/actions";
import {productStyles} from "../../styles/styles";

export const Product: FC<ProductType> = ({
                                             type,
                                             image,
                                             amount,
                                             brand,
                                             density,
                                             id,
                                             category,
                                             alcohol,
                                             totalAmount,
                                             totalPrice,
                                             price,
                                             ordered,
                                             title,
                                             manufacturer,
                                             description, navigation
                                         }) => {
    const dispatch = useDispatch()
    const handleAddProduct = () => {
        dispatch(addProductAC({id, title, description, price, amount, type, image, totalPrice, totalAmount, ordered, category}))
        dispatch(setDrinksOrderedAC(true, id))
        dispatch(setSnacksOrderedAC(true, id))
    }
    return (
        <View style={productStyles.wrapper}>
            <View style={productStyles.container}>
                <View style={productStyles.imageBlock}>
                    <Image style={[category === 'toast' ? {width: '100%', height: 250} : category === 'seafood' ? {width: '100%', height: 250} : category === 'chips' ? {width: '100%', height: 250} : {width: '50%', height: 300}]} source={{uri: image}}/>

                </View>
                <View style={productStyles.titleBlock}>
                    <Text style={productStyles.title}>{title}</Text>
                    {brand ? <Text style={productStyles.secondText}>{category}, {brand}, {manufacturer}</Text> : null}
                    {alcohol ? <Text style={productStyles.secondText}>Alcohol: {alcohol}%</Text> : null}
                </View>
                <View style={productStyles.priceContainer}>
                    <View style={productStyles.priceBlock}>
                        <Text style={productStyles.price}>{price}</Text>
                        <Text style={productStyles.price}> грн/{type === 'weight' ? '100г' : '1уп'}</Text>
                    </View>
                    <View>
                        {!ordered ?
                            <TouchableOpacity style={productStyles.button} onPress={handleAddProduct}>
                                <Text style={productStyles.buttonText}>В кошик</Text>
                            </TouchableOpacity> :
                            <TouchableOpacity disabled={true} style={[productStyles.button, {backgroundColor: '#fff'}]}>
                                <Text style={[productStyles.buttonText, {color: 'red'}]}>В кошику</Text>
                            </TouchableOpacity>
                        }
                    </View>
                </View>
                <View>
                    {description ? <Text style={productStyles.descBlock}>{description}</Text> : null}
                </View>
            </View>
        </View>
    )
}

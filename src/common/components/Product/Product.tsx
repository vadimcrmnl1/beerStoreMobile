import React, {FC} from "react";
import {Button, Image, Text, View} from "react-native";
import {useAppDispatch, useAppSelector} from "../../../app/hooks";
import {ProductType, setDrinkOrdered} from "../../../features/drinks/model/drinks-reducer";
import {selectDrinks} from "../../../features/drinks/model/drinks-selectors";
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
                                             description
                                         }) => {
    const dispatch = useAppDispatch()
    const drinks = useAppSelector(selectDrinks)
    const handleAddProduct = () => {
        console.log('Button active')
    }
    return (
        <View style={productStyles.wrapper}>
            <View style={productStyles.container}>
                <Image style={productStyles.image} source={{uri: image}}/>
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
                            <Button color={'red'} onPress={handleAddProduct} title={'В кошик'}/> :
                            <Button title={'В кошику'}/>
                        }
                    </View>
                </View>
                <View>
                    <Text>{description}</Text>
                </View>
            </View>
        </View>
    )
}

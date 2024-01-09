import React from "react";
import {ImageBackground, Text, TouchableOpacity, View} from "react-native";
import {useAppSelector} from "../../../app/hooks";
import {selectProducts} from "../../../features/cart/model/selectors";
import cartIcon from "../../images/icons/cart.png";
import {cartStyles} from "../../styles/styles";

export const Footer = ({navigation}) => {
    const products = useAppSelector(selectProducts)

    return (
        <View style={cartStyles.cartIconWrapper}>
            {/*{products.length !== 0 ?*/}
                <View onTouchEnd={() => navigation.navigate('Cart')} style={cartStyles.cartIconContainer}>
                    <TouchableOpacity style={cartStyles.cartIcon}>
                        <Text style={cartStyles.cartBlockText}>В кошику: </Text>
                        <Text style={cartStyles.cartBlockText}>{products.length}</Text>
                    </TouchableOpacity>

                </View>
                {/*: null}*/}
        </View>

    )
}

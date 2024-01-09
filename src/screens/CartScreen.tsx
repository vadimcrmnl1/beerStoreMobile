import React from 'react';
import {ScrollView, View} from "react-native";
import {useSelector} from "react-redux";
import {styles} from "../common/styles/styles";
import {Cart} from "../features/cart/Cart";
import {CartWindow} from "../features/cart/components/CartWindow/CartWindow";
import {selectProducts} from "../features/cart/model/selectors";

export const CartScreen = ({navigation}) => {
    const products = useSelector(selectProducts)

    return (
        <View style={styles.wrapper}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Cart navigation={navigation}/>

            </ScrollView>
            {products.length ? <CartWindow navigation={navigation}/> : null}
        </View>
    );
};

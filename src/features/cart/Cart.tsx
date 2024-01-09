import React from 'react';
import {Text, View} from "react-native";
import {useSelector} from "react-redux";
import {CartButton} from "../../common/components/Button/Button";
import {styles} from "../../common/styles/styles";
import {CartProduct} from "./components/CartProduct/CartProduct";
import {EmptyCart,} from "./components/EmptyCart/EmptyCart";
import {selectProducts} from "./model/selectors";

export const Cart: React.FC = ({navigation}) => {
    const products = useSelector(selectProducts)
    return (
        <View>
            <View>
                <Text style={styles.title}>Кошик</Text>

            </View>
            <View>
                <View style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: 50}}>
                    {products.length ?
                        products.map(el => {
                            return <CartProduct key={el.id} id={el.id} title={el.title} description={el.description}
                                                price={el.price}
                                                totalPrice={el.totalPrice} amount={el.amount}
                                                totalAmount={el.totalAmount} image={el.image} type={el.type}
                                                category={el.category}
                                                ordered={el.ordered}/>
                        }) : <EmptyCart navigation={navigation}/>
                    }
                    {products.length ? <CartButton title={'В магазин'} navigation={navigation}/> : null}
                </View>
            </View>

        </View>

    );
};

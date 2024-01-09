import React from "react";
import {Text, View} from "react-native";
import {useAppSelector} from "../../../../app/hooks";
import {ModalForm} from "../../../../common/components/ModalForm/ModalForm";
import {cartStyles} from "../../../../common/styles/styles";
import {selectProducts, selectTotalCartPrice} from "../../model/selectors";

export const CartWindow: React.FC = ({navigation}) => {
    const totalCartPrice = useAppSelector(selectTotalCartPrice)
    const products = useAppSelector(selectProducts)

    return (
        <View style={cartStyles.windowWrapper}>
            <View style={cartStyles.windowContainer}>
                <Text style={cartStyles.windowTitle}>Ваше замовлення</Text>
                <View>
                    <Text style={[cartStyles.windowTitle, {textTransform: 'none', fontSize: 18}]}>Стоимость доставки в
                        любую точку 50 грн</Text>
                    <Text style={[cartStyles.windowTitle, {textTransform: 'none', fontSize: 18}]}>Позицій у
                        замовленні: {products.length}</Text>
                    <Text style={[cartStyles.windowTitle, {textTransform: 'none', fontSize: 18}]}>Сума
                        замовлення: {totalCartPrice} грн</Text>
                </View>
                <ModalForm navigation={navigation}/>

            </View>
        </View>
    )
}

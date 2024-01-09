import {Image, Text, View} from "react-native";
import {useSelector} from "react-redux";
import {CartButton} from "../../../../common/components/Button/Button";
import {cartStyles} from "../../../../common/styles/styles";
import {selectOrderSent} from "../../model/selectors";


export const EmptyCart = ({navigation}) => {
    const orderSent = useSelector(selectOrderSent)
    return (
        <View>
            {orderSent ?
                <View style={cartStyles.emptyCartWrapper}>
                    <Text style={cartStyles.emptyCartText}>Ваше замовлення надіслано</Text>
                    <br/>
                    <Text style={[cartStyles.emptyCartText, {fontSize: 22}]}>Дякую за замовлення! Найближчим часом з Вами зв'яжуться наші співробітники</Text>
                    <CartButton navigation={navigation}/>
                </View> :
                <View style={cartStyles.emptyCartWrapper}>
                    <Text style={cartStyles.emptyCartText}>
                        Ваш кошик порожній. Будь ласка, виберіть щось у розділі
                        "Пиво", "Закуски", "Риба" або "Сувеніри"</Text>
                    <Image style={cartStyles.emptyCartImage} source={require('./../../../../common/images/empty_cart.png')}/>
                    <CartButton navigation={navigation}/>
                </View>
            }
        </View>
    )
}

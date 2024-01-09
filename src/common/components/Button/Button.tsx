import {Text, TouchableOpacity} from "react-native";
import {cartStyles} from "../../styles/styles";

export const CartButton = ({navigation}) => {
    return (
        <TouchableOpacity style={[cartStyles.emptyCartButton]} onPress={() => navigation.navigate('На початок')}>
            <Text style={{textTransform: 'uppercase', fontWeight: '400', fontSize: 30, color: '#fff'}}>В магазин</Text>
        </TouchableOpacity>
    )
}

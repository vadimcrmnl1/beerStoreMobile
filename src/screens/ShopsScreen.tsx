import {ScrollView, View} from "react-native";
import {Shops} from "../features/shops/Shops";


export const ShopsScreen = ({navigation}) => {
    return (
        <ScrollView>
            <View>
                <Shops/>
            </View>
        </ScrollView>

    )
}

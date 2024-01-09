import {ScrollView, View} from "react-native";
import {Footer} from "../common/components/Footer/Footer";
import {Shops} from "../features/shops/Shops";


export const ShopsScreen = ({navigation}) => {
    return (
        <View style={{height: '100%', backgroundColor: '#282424'}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View>
                        <Shops/>
                    </View>
                </ScrollView>
                <Footer navigation={navigation}/>
        </View>


    )
}

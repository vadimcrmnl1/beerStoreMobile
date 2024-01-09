import {ScrollView, View} from "react-native";
import {Footer} from "../common/components/Footer/Footer";
import {Snacks} from "../features/snacks/Snacks";

export const SnacksScreen = ({navigation}) => {
    return (
        <View style={{backgroundColor: '#282424', flex: 1}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, zIndex: 13, display: 'flex', justifyContent: 'center'}}>
                    <Snacks navigation={navigation}/>
                </View>
            </ScrollView>
            <Footer navigation={navigation}/>

        </View>
    )
}

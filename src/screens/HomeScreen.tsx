import {ImageBackground, ScrollView, Text, View} from "react-native";
import {Footer} from "../common/components/Footer/Footer";
import {shopStyles, styles} from "../common/styles/styles";
import drinksImage from './../../src/common/images/drinks.jpg'
import snacksImage from './../../src/common/images/snacks.jpg'
import emptyShopImage from './../common/images/empty_image.png'

export const HomeScreen = ({navigation}) => {
    return (
        <View style={{height: '100%', backgroundColor: '#282424'}}>

            <ScrollView>
                <View style={styles.wrapper}>
                    <Text style={styles.title}>Пивний Живіт - мережа магазинів живого пива!</Text>
                    <View style={shopStyles.container} onTouchEnd={() => navigation.navigate('Закуски')}>
                        <ImageBackground style={shopStyles.bcgImage} source={snacksImage}>
                            <Text style={shopStyles.textImage}>Закуски</Text>
                        </ImageBackground>
                    </View>
                    <View style={shopStyles.container} onTouchEnd={() => navigation.navigate('Напої')}>
                        <ImageBackground style={shopStyles.bcgImage} source={drinksImage}>
                            <Text style={shopStyles.textImage}>Напоі</Text>
                        </ImageBackground>
                    </View>

                    <View style={shopStyles.container} onTouchEnd={() => navigation.navigate('Магазини')}>
                        <ImageBackground style={shopStyles.bcgImage} source={emptyShopImage}>
                            <Text style={shopStyles.textImage}>Магазині</Text>
                        </ImageBackground>
                    </View>
                </View>
            </ScrollView>
            <Footer navigation={navigation}/>
        </View>

    )
}


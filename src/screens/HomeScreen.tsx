import {ImageBackground, ScrollView, Text, View} from "react-native";
import {shopStyles, styles} from "../common/styles/styles";
import drinksImage from './../../src/common/images/drinks.jpg'
import emptyShopImage from './../common/images/empty_image.png'

export const HomeScreen = ({navigation}) => {
    return (
        <ScrollView>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Пивний Живіт - мережа магазинів живого пива!</Text>
                <View style={shopStyles.container} onTouchEnd={() => navigation.navigate('Shops')}>
                    <ImageBackground style={shopStyles.bcgImage} source={emptyShopImage}>
                        <Text style={shopStyles.textImage}>Магазині</Text>
                    </ImageBackground>
                </View>
                <View style={shopStyles.container} onTouchEnd={() => navigation.navigate('Drinks')}>
                    <ImageBackground style={shopStyles.bcgImage} source={drinksImage}>
                        <Text style={shopStyles.textImage}>Напоі</Text>
                    </ImageBackground>
                </View>
            </View>
        </ScrollView>
    )
}


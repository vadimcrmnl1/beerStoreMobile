import {Entypo, Ionicons, MaterialCommunityIcons,} from "@expo/vector-icons";
import {createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import {onValue, ref} from "firebase/database";
import * as React from "react";
import {useEffect} from "react";
import {Linking} from "react-native";
import {useDispatch} from "react-redux";
import {setOrderSentAC} from "../features/cart/model/actions";
import {selectOrderSent} from "../features/cart/model/selectors";
import {fetchDrinksAC} from "../features/drinks/model/actions";
import {fetchSnacksAC} from "../features/snacks/model/actions";
import {AboutScreen} from "../screens/AboutScreen";
import {CartScreen} from "../screens/CartScreen";
import {DrinksScreen} from "../screens/DrinksScreen";
import {HomeScreen} from "../screens/HomeScreen";
import {ShopsScreen} from "../screens/ShopsScreen";
import {SnacksScreen} from "../screens/SnacksScreen";
import {setAppIsLoadingAC} from "./actions";
import {db} from "./firebase";
import {useAppSelector} from "./hooks";

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} style={{backgroundColor: '#282424'}}>
            <DrawerItemList {...props} />
            <DrawerItem
                icon={() => <Entypo name="instagram" size={24} color="#e5e5e5" />}
                label={'Ми в Instagram'} onPress={() => Linking.openURL('https://www.instagram.com/pivniy_zhyvit/')}
                labelStyle={{color: '#e5e5e5', fontSize: 18}}
            />
            <DrawerItem
                icon={() => <Entypo name="facebook" size={24} color="#e5e5e5" />}
                label={'Ми в Facebook'}
                onPress={() => Linking.openURL('https://www.facebook.com/people/%D0%9F%D0%B8%D0%B2%D0%BD%D0%B8%D0%B9-%D0%96%D0%B8%D0%B2%D1%96%D1%82/100063921219625/')}
                labelStyle={{color: '#e5e5e5', fontSize: 18}}
            />



        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

const MyDrawer = () => {

    return (
        <Drawer.Navigator
            // useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}

        >
            <Drawer.Screen name="На початок" navigationKey={'Home'} component={HomeScreen}
                           options={{
                               drawerIcon: () => (
                                   <Ionicons name={"md-home"} size={24} color={'#e5e5e5'}/>
                               ),
                               drawerLabelStyle: {color: '#e5e5e5', fontSize: 18},
                               drawerActiveBackgroundColor: '#3a3a3a',
                               headerStyle: {backgroundColor: '#332d2d'},
                               headerTitleStyle: {color: '#e5e5e5', fontWeight: '300', fontSize: 24},

                           }}/>
            <Drawer.Screen name="Закуски" navigationKey={'Snacks'} component={SnacksScreen} options={{
                drawerIcon: () => (
                    <MaterialCommunityIcons name="cheese" size={24} color="#e5e5e5" />
                ),
                drawerLabelStyle: {color: '#e5e5e5', fontSize: 18},
                drawerActiveBackgroundColor: '#3a3a3a',
                headerStyle: {backgroundColor: '#332d2d'},
                headerTitleStyle: {color: '#e5e5e5', fontWeight: '300', fontSize: 24},

            }}/>
            <Drawer.Screen name="Напої" navigationKey={'Drinks'} component={DrinksScreen} options={{
                drawerIcon: () => (
                    <Entypo name="drink" size={24} color="#e5e5e5" />
                ),
                drawerLabelStyle: {color: '#e5e5e5', fontSize: 18},
                drawerActiveBackgroundColor: '#3a3a3a',
                headerStyle: {backgroundColor: '#332d2d'},
                headerTitleStyle: {color: '#e5e5e5', fontWeight: '300', fontSize: 24},

            }}/>
            <Drawer.Screen name="Магазини" navigationKey={'Shops'} component={ShopsScreen} options={{
                drawerIcon: () => (
                    <Entypo name="shop" size={24} color="#e5e5e5" />
                ),
                drawerLabelStyle: {color: '#e5e5e5', fontSize: 18},
                drawerActiveBackgroundColor: '#3a3a3a',
                headerStyle: {backgroundColor: '#332d2d'},
                headerTitleStyle: {color: '#e5e5e5', fontWeight: '300', fontSize: 24},

            }}/>
            <Drawer.Screen name="Кошик" navigationKey={'Cart'} component={CartScreen} options={{
                drawerIcon: () => (
                    <Ionicons name="cart" size={24} color="#e5e5e5" />
                ),
                drawerLabelStyle: {color: '#e5e5e5', fontSize: 18},
                drawerActiveBackgroundColor: '#3a3a3a',
                headerStyle: {backgroundColor: '#332d2d'},
                headerTitleStyle: {color: '#e5e5e5', fontWeight: '300', fontSize: 24},

            }}/>
            <Drawer.Screen name="Про нас" navigationKey={'About'} component={AboutScreen} options={{
                drawerIcon: () => (
                    <Ionicons name="information-circle" size={24} color="#e5e5e5" />
                ),
                drawerLabelStyle: {color: '#e5e5e5', fontSize: 18},
                drawerActiveBackgroundColor: '#3a3a3a',
                headerStyle: {backgroundColor: '#332d2d'},
                headerTitleStyle: {color: '#e5e5e5', fontWeight: '300', fontSize: 24},

            }}/>

        </Drawer.Navigator>
    );
}

export function AppComponent() {
    const dispatch = useDispatch()
    const orderSent = useAppSelector(selectOrderSent)
    useEffect(() => {
        dispatch(setAppIsLoadingAC(true))
        onValue(ref(db), snapshot => {
            const data = snapshot.val()
            dispatch(fetchDrinksAC(data.drinks))
            dispatch(fetchSnacksAC(data.snacks.toast, data.snacks.seafood, data.snacks.chips))
            dispatch(setAppIsLoadingAC(false))
            dispatch(setOrderSentAC(false))
        })
    }, [orderSent])
    return (
        <NavigationContainer>
            <MyDrawer/>
        </NavigationContainer>
    )
}

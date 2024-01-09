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
            <DrawerItem label={'Instagram'} onPress={() => Linking.openURL('https://mywebsite.com/help')}
                        labelStyle={{color: '#e5e5e5', fontSize: 18, marginLeft: 40}}

            />


        </DrawerContentScrollView>
    );
}

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
    const options = {
        drawerLabelStyle: {color: '#e5e5e5', fontSize: 18, marginLeft: 40},
        drawerActiveBackgroundColor: '#3a3a3a',
        headerStyle: {backgroundColor: '#282424'},
        headerTitleStyle: {color: '#e5e5e5', fontWeight: '300', fontSize: 24}
    }
    return (
        <Drawer.Navigator
            // useLegacyImplementation
            drawerContent={(props) => <CustomDrawerContent {...props} />}
        >
            <Drawer.Screen name="На початок" navigationKey={'Home'} component={HomeScreen}
                           options={{
                               drawerLabelStyle: {color: '#e5e5e5', fontSize: 18, marginLeft: 40},
                               drawerActiveBackgroundColor: '#3a3a3a',
                               headerStyle: {backgroundColor: '#282424'},
                               headerTitleStyle: {color: '#e5e5e5', fontWeight: '300', fontSize: 24},
                           }}/>
            <Drawer.Screen name="Закуски" navigationKey={'Snacks'} component={SnacksScreen} options={options}/>
            <Drawer.Screen name="Напої" navigationKey={'Drinks'} component={DrinksScreen} options={options}/>
            <Drawer.Screen name="Магазини" navigationKey={'Shops'} component={ShopsScreen} options={options}/>
            <Drawer.Screen name="Кошик" navigationKey={'Cart'} component={CartScreen} options={options}/>
            <Drawer.Screen name="Про нас" navigationKey={'About'} component={AboutScreen} options={options}/>

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

import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList} from "@react-navigation/drawer";
import {NavigationContainer} from "@react-navigation/native";
import {onValue, ref} from "firebase/database";
import * as React from "react";
import {useEffect} from "react";
import {fetchDrinks} from "../features/drinks/model/drinks-reducer";
import {AboutScreen} from "../screens/AboutScreen";
import {DrinksScreen} from "../screens/DrinksScreen";
import {HomeScreen} from "../screens/HomeScreen";
import {ShopsScreen} from "../screens/ShopsScreen";
import {db} from "./firebase";
import {useAppDispatch} from "./hooks";

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props} style={{backgroundColor: '#a29d9d'}}>
            <DrawerItemList {...props} />
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
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Drinks" component={DrinksScreen}/>
            <Drawer.Screen name="Shops" component={ShopsScreen}/>
            <Drawer.Screen name="About" component={AboutScreen}/>
        </Drawer.Navigator>
    );
}
export function AppComponent() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        onValue(ref(db), snapshot => {
            const data = snapshot.val()
            console.log(data.drinks)
            dispatch(fetchDrinks(data.drinks, data.drinks))
        })
    }, [])
    return (
        <NavigationContainer>
            <MyDrawer/>
        </NavigationContainer>
    )
}

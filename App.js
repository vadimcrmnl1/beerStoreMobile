import 'react-native-gesture-handler';
import * as React from 'react';
import {useFonts} from 'expo-font';
import {Provider} from "react-redux";
import {store} from "./src/app/store";
import {AppComponent} from "./src/app/AppComponent";


export default function App() {
    const [fontsLoaded] = useFonts({
        'Roboto-Light': require('./assets/fonts/Roboto-Light.ttf'),
    });
    if (!fontsLoaded) {
        return null
    }

    return (
        <Provider store={store}>
            <AppComponent/>
        </Provider>
    );
}



import {configureStore} from "@reduxjs/toolkit";
import {drinksReducer} from "../features/drinks/model/drinks-reducer";
import {shopsReducer} from "../features/shops/model/shop-reducer";

export const store = configureStore({
    reducer: {
        shops: shopsReducer,
        drinks: drinksReducer
    }
})
export type AppRootStateType = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

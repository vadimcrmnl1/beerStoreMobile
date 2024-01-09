import {applyMiddleware, combineReducers, legacy_createStore} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {thunk, ThunkDispatch} from "redux-thunk";
import {cartReducer} from "../features/cart/model/cart-reducer";
import {CartActionsType} from "../features/cart/model/types";
import {drinksReducer} from "../features/drinks/model/drinks-reducer";
import {DrinksActionTypes} from "../features/drinks/model/types";
import {shopsReducer} from "../features/shops/model/shop-reducer";
import {ShopsActionTypes} from "../features/shops/model/types";
import {snacksReducer} from "../features/snacks/model/snacks-reducer";
import {SnacksActionTypes} from "../features/snacks/model/types";
import {appReducer} from "./app-reducer";
import {AppActionTypes} from "./types";


const rootReducer = combineReducers({
    app: appReducer,
    drinks: drinksReducer,
    shops: shopsReducer,
    cart: cartReducer,
    snacks: snacksReducer
})
const middlewareEnhancer = applyMiddleware<AppThunkDispatch, AppRootStateType>(thunk)
const composedEnhancers = composeWithDevTools(middlewareEnhancer)

export const store = legacy_createStore(rootReducer, composedEnhancers)

export type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never
export type AppRootStateType = ReturnType<typeof rootReducer>

export type AppThunkDispatch = ThunkDispatch<AppRootStateType, unknown, AllReducersActionsType>
export type AllReducersActionsType =  DrinksActionTypes | AppActionTypes | ShopsActionTypes | CartActionsType | SnacksActionTypes

// @ts-ignore
window.store = store



//RTK
// export const store = configureStore({
//     reducer: {
//         shops: shopsReducer,
//         drinks: drinksReducer
//     }
// })
// export type AppRootStateType = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

import {ProductType} from "../../drinks/model/drinks-reducer";
import {CartActionsType} from "./types";

export const cartInitialState = {
    products: [] as ProductType[],
    totalCount: 0,
    totalCartPrice: 50,
    orderSent: false
}
export type CartInitialStateType = typeof cartInitialState
export const cartReducer = (state: CartInitialStateType = cartInitialState, action: CartActionsType): CartInitialStateType => {
    switch (action.type) {
        case 'CART/ADD_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.payload.product],
                totalCount: state.totalCount + 1,
                totalCartPrice: state.totalCartPrice + action.payload.product.price
            }
        case 'CART/REMOVE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(el => el.id !== action.payload.id),
                totalCount: state.totalCount - 1,
                totalCartPrice: state.totalCartPrice - action.payload.price
            }
        case 'CART/INCREMENT_PRODUCT':
            return {
                ...state,
                products: state.products.map(el => el.id === action.payload.id ? {
                    ...el,
                    totalAmount: el.totalAmount + action.payload.amount,
                    totalPrice: el.totalPrice + action.payload.price
                } : el),
                totalCount: state.totalCount + action.payload.amount,
                totalCartPrice: state.totalCartPrice + action.payload.price
            }
        case 'CART/DECREMENT_PRODUCT':
            return {
                ...state,
                products: state.products.map(el => el.id === action.payload.id ? {
                    ...el,
                    totalAmount: el.totalAmount - action.payload.amount,
                    totalPrice: el.totalPrice - action.payload.price,
                } : el),
                totalCount: state.totalCount - action.payload.amount,
                totalCartPrice: state.totalCartPrice - action.payload.price
            }
        case 'CART/REMOVE_CART':
            return {
                ...state,
                products: action.payload.products,
                totalCount: action.payload.totalCount,
                totalCartPrice: action.payload.totalCartPrice
            }
        case 'CART/ORDER_SENT':
            return {
                ...state, orderSent: action.payload.orderSent
            }
        default:
            return state
    }
}

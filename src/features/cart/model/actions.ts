import {ProductType} from "../../drinks/model/drinks-reducer";

export const addProductAC = (product: ProductType) => (
    {
        type: 'CART/ADD_PRODUCT',
        payload: {product}
    } as const
)
export const removeProductAC = (id: string, price: number) => (
    {
        type: 'CART/REMOVE_PRODUCT',
        payload: {id, price}
    } as const
)
export const incrementProductAC = (id: string, amount: number, price: number) => (
    {
        type: 'CART/INCREMENT_PRODUCT',
        payload: {id, amount, price}
    } as const
)
export const decrementProductAC = (id: string, amount: number, price: number) => (
    {
        type: 'CART/DECREMENT_PRODUCT',
        payload: {id, amount, price}
    } as const
)
export const removeCartAC = (products: ProductType[], totalCount: number, totalCartPrice: number) => ({
    type: 'CART/REMOVE_CART',
    payload: {products, totalCount, totalCartPrice}
} as const)
export const setOrderSentAC = (orderSent: boolean) => ({
    type: 'CART/ORDER_SENT',
    payload: {orderSent}
} as const)

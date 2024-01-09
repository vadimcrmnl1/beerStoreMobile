import {AppRootStateType} from "../../../app/store";

export const selectProducts = (state: AppRootStateType) => state.cart.products
export const selectTotalCount = (state: AppRootStateType) => state.cart.totalCount
export const selectTotalCartPrice = (state: AppRootStateType) => state.cart.totalCartPrice
export const selectOrderSent = (state: AppRootStateType) => state.cart.orderSent

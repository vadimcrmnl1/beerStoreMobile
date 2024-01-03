import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const slice = createSlice({
    name: 'shops',
    initialState: {
        shops: [] as ShopType[],
    },
    reducers: {
        fetchShops (state, action: PayloadAction<ShopType[]>) {
            state.shops = action.payload
        }
    }
})
export const shopsReducer = slice.reducer
export const {fetchShops} = slice.actions

export type ShopType = {
    id: string
    city: string
    address: string
    phone: string
    image: string
    timeOfWork: string
}

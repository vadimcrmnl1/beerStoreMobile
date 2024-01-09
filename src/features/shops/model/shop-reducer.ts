import {ShopsActionTypes} from "./types";

export const shopsInitialState = {
    shops: [] as ShopType[]
}
export type ShopsInitialState = typeof shopsInitialState
export const shopsReducer = (state: ShopsInitialState = shopsInitialState, action: ShopsActionTypes): ShopsInitialState => {
    switch (action.type) {
        case 'SHOPS/FETCH_SHOPS':
            return {...state, shops: action.payload.shops}
        default:
            return state
    }
}

// RTK
// const slice = createSlice({
//     name: 'shops',
//     initialState: {
//         shops: [] as ShopType[],
//     },
//     reducers: {
//         fetchShops (state, action: PayloadAction<ShopType[]>) {
//             state.shops = action.payload
//         }
//     }
// })
// export const shopsReducer = slice.reducer
// export const {fetchShops} = slice.actions

export type ShopType = {
    id: string
    city: string
    address: string
    phone: string
    image: string
    timeOfWork: string
}

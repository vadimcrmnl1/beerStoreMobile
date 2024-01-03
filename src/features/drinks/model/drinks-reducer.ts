import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'drinks',
    initialState: {
        drinks: [] as ProductType[]
    },
    reducers: {
        fetchDrinks(state, action: PayloadAction<ProductType[]>) {
            state.drinks = action.payload
        },
        sortDrinks(state, action) {
            state.drinks = state.drinks.filter(el => el.category === action.payload)
        },
        setDrinkOrdered(state, action: PayloadAction<{ ordered: boolean, id: string }>) {
            state.drinks = state.drinks.map(el => el.id === action.payload.id ? {
                ...el,
                ordered: action.payload.ordered
            } : el)
        },
        removeDrinks(state) {
            return state
        }
    },

})

export const drinksReducer = slice.reducer
export const {fetchDrinks, setDrinkOrdered, removeDrinks, sortDrinks} = slice.actions

export type ProductType = {
    id: string
    title: string
    description: string
    alcohol?: number | undefined
    density?: number | undefined
    price: number
    totalPrice: number
    amount: number
    totalAmount: number
    image: string
    brand?: string | undefined
    manufacturer?: string | undefined
    type: 'weight' | 'package'
    category: CategoryType
    ordered: boolean


}
export type CategoryType = 'toast' | 'seafood' | 'chips' | 'rum' | 'whiskey' | 'liquor' | 'cognac' | 'brandy' | 'vodka'

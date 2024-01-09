import {CategoryType, ProductType} from "./drinks-reducer";

export const fetchDrinksAC = (drinks: ProductType[]) => ({
    type: 'DRINKS/FETCH_DRINKS',
    payload: {drinks}
} as const)

export const removeDrinksStateAC = () => ({
    type: 'DRINKS/REMOVE_DRINKS_STATE',
    payload: {}
} as const)

export const setDrinksOrderedAC = (ordered: boolean, id: string) => (
    {
        type: 'DRINKS/SET_PRODUCT_ORDERED',
        payload: {ordered, id}
    } as const
)

export const sortDrinksAC = (category: CategoryType) => ({
    type: 'DRINKS/SORT_DRINKS',
    payload: {category}
} as const)

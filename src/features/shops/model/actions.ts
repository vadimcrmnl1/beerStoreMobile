import {ShopType} from "./shop-reducer";

export const fetchShopsAC = (shops: ShopType[]) => ({
    type: 'SHOPS/FETCH_SHOPS',
    payload: {shops}
} as const)

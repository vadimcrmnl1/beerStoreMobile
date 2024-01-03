import {AppRootStateType} from "../../../app/store";

export const selectDrinks = (state: AppRootStateType) => state.drinks.drinks

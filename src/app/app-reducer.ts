import {AppActionTypes} from "./types";

const appInitialState = {
    isLoading: false,
}
export const appReducer = (state: AppInitialStateType = appInitialState, action: AppActionTypes): AppInitialStateType => {
    switch (action.type) {
        case 'APP/IS_LOADING':
            return {...state, isLoading: action.payload.isLoading}
        default:
            return state
    }
}
export type AppInitialStateType = typeof appInitialState

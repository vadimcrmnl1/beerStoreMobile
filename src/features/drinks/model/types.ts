import {InferValueTypes} from "../../../app/store";
import * as actions from './actions'

export type DrinksActionTypes = ReturnType<InferValueTypes<typeof actions>>

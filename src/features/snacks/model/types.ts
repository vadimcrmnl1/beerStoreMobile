import {InferValueTypes} from "../../../app/store";
import * as actions from './actions'

export type SnacksActionTypes = ReturnType<InferValueTypes<typeof actions>>

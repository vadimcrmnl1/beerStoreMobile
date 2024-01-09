import * as actions from './actions'
import {InferValueTypes} from "./store";

export type AppActionTypes = ReturnType<InferValueTypes<typeof actions>>

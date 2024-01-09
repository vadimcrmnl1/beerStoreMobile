import {InferValueTypes} from "../../../app/store";
import * as actions from './actions'

export type ShopsActionTypes = ReturnType<InferValueTypes<typeof actions>>

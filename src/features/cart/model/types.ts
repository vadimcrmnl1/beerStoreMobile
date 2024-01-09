import {InferValueTypes} from "../../../app/store";
import * as actions from './actions'

export type CartActionsType = ReturnType<InferValueTypes<typeof actions>>

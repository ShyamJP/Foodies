import HandleCart from "./HandleCart"
import { combineReducers } from "redux"
import  HandleOrder  from "./HandleOrder"

const RootReducer = combineReducers({
    HandleCart, HandleOrder 
})

export default RootReducer;
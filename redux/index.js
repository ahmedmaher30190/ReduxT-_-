import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import CounterReducer from "./reducer";

const rootReducer = combineReducers({CounterReducer})
export const store = createStore(rootReducer, applyMiddleware(thunk));
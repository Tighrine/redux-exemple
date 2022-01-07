import { createStore, combineReducers } from "redux";
import bugReducer from "../reducers/bugs/reducer";
import authReducer from "../reducers/auth/reducer";

const reducers = combineReducers({
    bugReducer,
    authReducer
})

const store = createStore(reducers);

export default store;
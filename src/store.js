import { applyMiddleware, combineReducers,createStore } from "redux";
import { userReducer } from "./redux/reducers/userReducer";
import {thunk} from "redux-thunk";
import { composeWithDevTools } from "@redux-devtools/extension";


const rootReducer = combineReducers({
    userList: userReducer,
})

const initialState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;
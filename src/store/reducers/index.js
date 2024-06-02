import { combineReducers } from "redux";
import productReducer from "./productReducer"
import categoriesReducer from "./categoriesReducer";
import imagesReducer from "./imagesReducer";
import usersReducer from "./usersReducers";

export default combineReducers({
    productReducer,
    categoriesReducer,
    imagesReducer,
    usersReducer
})
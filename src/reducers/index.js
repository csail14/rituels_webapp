import {combineReducers} from "redux";
import UserReducer from "./userReducer";
import ThemeReducer from './themeReducer'


const rootReducer = combineReducers({
    user: UserReducer,
    theme:ThemeReducer
});

export default rootReducer;
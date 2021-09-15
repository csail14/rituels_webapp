import { combineReducers } from "redux";
import UserReducer from "./userReducer";
import ThemeReducer from "./themeReducer";
import EventReducer from "./eventReducer";

const rootReducer = combineReducers({
  user: UserReducer,
  theme: ThemeReducer,
  agenda: EventReducer,
});

export default rootReducer;

import { combineReducers } from "redux";
import userReducer from "../../userReducer/userReducer";

const RootReducer = combineReducers({
  user: userReducer,
});
export default RootReducer;
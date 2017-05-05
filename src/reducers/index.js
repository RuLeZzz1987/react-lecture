import { combineReducers } from "redux";
import Form from "./form";
import Users from "./users";
import User from "./user";
import Total from "./total";

export default combineReducers({
  form: Form,
  users: Users,
  user: User,
  total: Total
})
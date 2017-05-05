import * as Types from "../constants";

export default (state = [], { type, ...action }) => {
  switch (type) {
    case Types.REMOVE_USER:
      return state.filter(user => user.id !== action.id);
    case Types.LOAD_USERS_DONE:
      return action.users;
    default:
      return state;
  }
};

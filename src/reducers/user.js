import * as Types from "../constants";

const defaultState = {
  id: 0,
  name: "",
  avatar_url: "",
  isLoaded: false
};

export default (state = defaultState, { type, ...action }) => {
  switch (type) {
    case Types.CLEAR_USER:
      return defaultState;
    case Types.SET_USER:
      return Object.assign({}, state, action.user, { isLoaded: true });
    default:
      return state;
  }
};

/*
{
  ...state,
  ...action.user,
  isLoaded: true
}*/

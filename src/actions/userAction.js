import * as Types from "../constants";

export const setUser = user => ({
  type: Types.SET_USER,
  user
});

export const clearUser = () => ({
  type: Types.CLEAR_USER
});

export const loadUser = login => dispatch => {
  fetch(`http://api.github.com/users/${login}`)
    .then(r => r.json())
    .then(r => dispatch(setUser(r)));
};
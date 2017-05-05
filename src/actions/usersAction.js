import * as Types from "../constants";

export const removeUser = id => ({
  type: Types.REMOVE_USER,
  id
});

const loadUsersDone = users => ({
  type: Types.LOAD_USERS_DONE,
  users
});

export const loadUsers = () =>
  (dispatch, getState) => {
    fetch("http://api.github.com/users")
      .then(r => r.json())
      .then(users => dispatch(loadUsersDone(users)));
  };

const setTotal = total => ({
  type: Types.SET_TOTAL,
  total
});

export const searchUsers = () =>
  (dispatch, getState) => {
    const state = getState();
    const query = state.form;

    fetch(`http://api.github.com/search/users?q=${query}`)
      .then(r => r.json())
      .then(r => {
        dispatch(setTotal(r.total_count));
        dispatch(loadUsersDone(r.items));
      });
  };

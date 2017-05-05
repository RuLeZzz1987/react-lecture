import * as Types from "../constants";


export const changeSearchField = e => ({
  type: Types.CHANGE_SEARCH_FIELD,
  value: e.target.value
});
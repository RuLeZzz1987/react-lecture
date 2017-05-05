import * as Types from "../constants";

export default (state="", {type, ...action}) => {
  switch(type) {
    case Types.CHANGE_SEARCH_FIELD:
      return action.value;
    default:
      return state;
  }

}
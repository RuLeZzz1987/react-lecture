import * as Types from "../constants";

export default (state=0, {type, ...action}) => {
  switch(type) {
    case Types.SET_TOTAL:
      return action.total;
    default:
      return state;
  }
}
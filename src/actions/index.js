import { CHANGE_MORE_INFO, CHANGE_NAME } from "../constants/ActionTypes";

export function changeUserName(newName) {
  return {
    type: CHANGE_NAME,
    payload: newName,
  };
}

export function changeUserMoreInfo(data) {
  return {
    type: CHANGE_MORE_INFO,
    payload: data,
  };
}

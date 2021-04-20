import { userActionTypes } from "./user-constants";

export const setCurrentUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
  });
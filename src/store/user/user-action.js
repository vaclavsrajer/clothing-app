import { createAction } from "../../utils/firebase/reducer/reducer.utils";
import { USER_ACTION_TYPES } from "./user-types";

export const setCurrentUser = (user) => {
  return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export const checkUserSession = () =>
  createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);

export const googleSignInStart = () =>
  createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);

export const emailSignInStart = (email, password) =>
  createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, { email, password });

export const emailSingUpStart = (enail, password, displayName) => {
  createAction(USER_ACTION_TYPES.EMAIL_SING_UP_START, {
    enail,
    password,
    displayName,
  });
};

export const signInSuccess = (user, displayName) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, { user, displayName });

export const signInFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_IN_FAILED, error);

export const signUnSuccess = (user) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS, user);

export const signUnFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_UP_FAILED, error);

export const signOutStart = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_START);

export const signOutSuccess = () =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);

export const signOutFailed = (error) =>
  createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED, error);

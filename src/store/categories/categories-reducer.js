import { CATEGORIES_ACTION_TYPES } from "./categories-types";

export const USER_INITIAL_STATE = {
  categories: [],
};

export const categoriesReducer = (state = USER_INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload };
    default:
      return state;
  }
};
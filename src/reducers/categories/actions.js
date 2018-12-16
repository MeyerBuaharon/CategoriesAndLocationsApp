import { makeActionCreator } from "redux-toolbelt";

export const fetchCategory = makeActionCreator("FETCH_CATEGORIES");
export const addCategory = makeActionCreator("ADD_CATEGORY");
export const updateCategory = makeActionCreator("UPDATE_CATEGORY");
export const removeCategory = makeActionCreator("REMOVE_CATEGORY");

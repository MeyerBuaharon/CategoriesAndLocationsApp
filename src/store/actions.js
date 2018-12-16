import { makeActionCreator } from "redux-toolbelt";

export const addCategory = makeActionCreator("addCategory");
export const deleteCategory = makeActionCreator("deleteCategory");
export const editCategoryAction = makeActionCreator("editCategoryAction");

export const addLocation = makeActionCreator("addLocation");
export const deleteLocation = makeActionCreator("deleteLocation");


export const actions =() =>{};
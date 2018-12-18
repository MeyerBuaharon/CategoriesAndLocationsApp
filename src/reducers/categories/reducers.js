import { makeReducer, composeReducers } from "redux-toolbelt";
import { genId } from "../utility";
import * as actions from "./actions";

const initialState = {
  categories: []
};

const setLocal = categories => {
  localStorage.setItem("categories", JSON.stringify(categories));
};

export const categoryReducer = composeReducers(
  makeReducer(
    actions.fetchCategory,
    state => {
      const categories = JSON.parse(localStorage.getItem("categories")) || [];
      return { ...state, categories };
    },
    {
      defaultState: initialState
    }
  ),
  makeReducer(actions.addCategory, (state, { payload }) => {
    const newCategory = { ...payload, _id: genId() };
    const newerCategories = [...state.categories, newCategory];
    setLocal(newerCategories);
    return { ...state, categories: newerCategories };
  }),
  makeReducer(actions.removeCategory, (state, { payload }) => {
    const newerCategories = [...state.categories];
    const toRemoveCategory = newerCategories.find(x => x._id === payload._id);
    newerCategories.splice(newerCategories.indexOf(toRemoveCategory), 1);
    setLocal(newerCategories);
    return { ...state, categories: newerCategories };
  }),
  makeReducer(actions.updateCategory, (state, { payload }) => {
    const newerCategories = [...state.categories];
    const toRemoveCategory = newerCategories.findIndex(
      x => x._id === payload._id
    );
    newerCategories.splice(toRemoveCategory, 1, payload);
    setLocal(newerCategories);
    return { ...state, categories: newerCategories };
  })
);

export default categoryReducer;

import { makeActionCreator } from "redux-toolbelt";

export const fetchLocation = makeActionCreator("FETCH_LOCATIONS");
export const addLocation = makeActionCreator("ADD_LOCATION");
export const updateLocation = makeActionCreator("UPDATE_LOCATION");
export const removeLocation = makeActionCreator("REMOVE_LOCATION");
export const sortLocation = makeActionCreator("ALPHABETIC_SORT");

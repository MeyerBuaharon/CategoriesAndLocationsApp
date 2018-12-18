import { genId } from "../utility";
import { makeReducer, composeReducers } from "redux-toolbelt";
import { isEqual } from "lodash";
import * as actions from "./actions";

const initialState = {
  Locations: []
};
const setLocal = locations => {
  localStorage.setItem("location", JSON.stringify(locations));
};

export const locationReducer = composeReducers(
  makeReducer(
    actions.fetchLocation,
    state => {
      const Locations = JSON.parse(localStorage.getItem("location")) || [];
      return { ...state, Locations };
    },
    {
      defaultState: initialState
    }
  ),
  makeReducer(actions.addLocation, (state, { payload }) => {
    const newLocation = { ...payload, _id: genId() };
    const newerLocations = [...state.Locations, newLocation];
    setLocal(newerLocations);
    return { ...state, Locations: [...state.Locations, newLocation] };
  }),
  makeReducer(actions.removeLocation, (state, { payload }) => {
    const newerLocation = [...state.Locations];
    const toRemoveLocation = newerLocation.find(x => x._id === payload._id);
    newerLocation.splice(newerLocation.indexOf(toRemoveLocation), 1);
    setLocal(newerLocation);
    return { ...state, Locations: newerLocation };
  }),
  makeReducer(actions.updateLocation, (state, { payload }) => {
    const newerLocations = [...state.Locations];
    const toRemoveLocations = newerLocations.findIndex(
      x => x._id === payload._id
    );
    newerLocations.splice(toRemoveLocations, 1, payload);
    setLocal(newerLocations);
    return { ...state, Locations: newerLocations };
  }),
  makeReducer(actions.sortLocation, state => {
    const newerLocations = [...state.Locations];
    newerLocations.sort((a, b) => {
      if (a.Name > b.Name) return -1;
      if (a.Name < b.Name) return 1;
      return 0;
    });
    if (isEqual(state.Locations, newerLocations)) {
      newerLocations.sort((a, b) => {
        if (a.Name < b.Name) return -1;
        if (a.Name > b.Name) return 1;
        return 0;
      });
    }
    return { ...state, Locations: newerLocations };
  })
);
export default locationReducer;

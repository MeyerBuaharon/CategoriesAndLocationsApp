import React from "react";
import { Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { compose } from "recompose";
import Layout from "./shared/components/Layout/Layout";
import Categories from "./components/Categories/Categories";
import Locations from "./components/Locations/Locations";
import * as actions from "./store/actions";

const App = ({
  locations,
  addCategory,
  deleteCategory,
  categories,
  editCategoryAction,
  addLocation,
  deleteLocation
}) => {
  return (
    <Layout>
      <Route
        path="/Categires"
        render={() => (
          <Categories
            addCategory={addCategory}
            deleteCategory={deleteCategory}
            editCategoryAction={editCategoryAction}
            formCategories={categories}
          />
        )}
      />
      <Route
        path="/locations"
        render={() => (
          <Locations
            addLocation={addLocation}
            deleteLocation={deleteLocation}
            formCategories={categories}
          />
        )}
      />
    </Layout>
  );
};
export default compose(
  withRouter,
  connect(
    state => ({
      locations: state.locations,
      categories: state.categories
    }),
    {
      addCategory: actions.actions.addCategory,
      deleteCategory: actions.deleteCategory,
      editCategoryAction: actions.editCategoryAction,
      addLocation: actions.addLocation,
      deleteLocation: actions.deleteLocation
    }
  )
)(App);

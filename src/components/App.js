import React, { Component } from "react";
import { connect } from "react-redux";
import { Layout } from "../shared/styles";
import { withRouter } from "react-router";
import { compose, lifecycle } from "recompose";
import * as categoryActions from "../reducers/categories/actions";
import * as locationActions from "../reducers/locations/actions";
import BottomNavbar from "../shared/BottomNavbar";

class App extends Component {
  render() {
    return (
      <Layout>
        <BottomNavbar />
      </Layout>
    );
  }
}

export default withRouter(
  compose(
    connect(
      null,

      {
        fetchCategories: categoryActions.fetchCategory,
        fetchLocations: locationActions.fetchLocation
      }
    ),
    lifecycle({
      componentDidMount() {
        this.props.fetchCategories();
        this.props.fetchLocations();
      }
    })
  )(App)
);

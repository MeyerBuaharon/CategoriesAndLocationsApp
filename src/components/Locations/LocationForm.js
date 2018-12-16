import React from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { lifecycle, compose } from "recompose";
import Button from "@material-ui/core/Button";
import TextInput from "../../shared/components/TextInput";
import SelectInput from "../../shared/components/SelectInput";
import { FormContainer, FormRow, Label } from "../../shared/styles";
import {
  required,
  number
} from "../../shared/utils/FieldLevelValidationForm";


const LocationForm = ({ handleSubmit, pristine, invalid, categories }) => (
  <FormContainer onSubmit={handleSubmit}>
    <FormRow>
      <Field
        component={TextInput}
        name="_id"
        type="hidden"
        style={{ height: 0 }}
      />
    </FormRow>
    <FormRow>
      <Label>Name: </Label>
      <Field
        name="Name"
        validate={required}
        component={TextInput}
        type="text"
      />
    </FormRow>
    <FormRow>
      <Label>Address: </Label>
      <Field
        name="Address"
        validate={required}
        component={TextInput}
        type="text"
      />
    </FormRow>
    <FormRow>
      <Label>Latitude: </Label>
      <Field
        name="Lat"
        validate={[required, number]}
        component={TextInput}
        type="text"
      />
    </FormRow>
    <FormRow>
      <Label>Longtitude: </Label>
      <Field
        name="Lon"
        validate={[required, number]}
        component={TextInput}
        type="text"
      />
    </FormRow>
    <FormRow>
      <Label>Category: </Label>
      <Field
        name="Category"
        validate={[required]}
        component={SelectInput}
        options={categories}
        val={"_id"}
        property={"Category"}
        type="text"
      />
    </FormRow>
    <FormRow style={{ justifyContent: "center" }}>
      <Button type="submit" disabled={pristine || invalid}>
        Save
      </Button>
    </FormRow>
  </FormContainer>
);

export default compose(
  connect(state => ({ category: state.categoryReducer.Categories })),
  reduxForm({
    // a unique name for the form
    form: "location"
  }),
  lifecycle({
    componentDidMount() {
      const { obj, initialize } = this.props;

      if (obj) {
        initialize({
          _id: obj._id,
          Name: obj.Name,
          Address: obj.Address,
          Lat: obj.Coordinates.Lat,
          Lon: obj.Coordinates.Lon,
          Category: obj.Category
        });
      }
    }
  })
)(LocationForm);

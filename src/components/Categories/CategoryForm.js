import React from "react";
import { Field, reduxForm } from "redux-form";
import Button from "@material-ui/core/Button";
import TextInput from "../../shared/components/TextInput";
import { required } from "../../shared/utils/FieldLevelValidationForm";
import { lifecycle, compose } from "recompose";
import { Label, FormRow, FormContainer } from "../../shared/styles";

const CategoryForm = ({ handleSubmit, pristine, invalid }) => (
  <FormContainer onSubmit={handleSubmit}>
    <FormRow>
      <Label>Category: </Label>
      <Field
        component={TextInput}
        name="_id"
        type="hidden"
        style={{ height: 0 }}
      />
      <Field
        name="Category"
        validate={required}
        component={TextInput}
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
  reduxForm({
    form: "category"
  }),
  lifecycle({
    componentDidMount() {
      const { initialize, obj } = this.props;
      if (obj) {
        initialize({
          Category: obj.Category,
          _id: obj._id
        });
      }
    }
  })
)(CategoryForm);

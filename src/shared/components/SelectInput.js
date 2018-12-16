import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
/**
import FormHelperText from '@material-ui/core/FormHelperText';
 * to be wrapped with redux-form Field component
 */
const SelectInput = ({
  label,
  options,
  input,
  property,
  val,
  multiple,
  meta: { error },
  ...inputProps
}) => {
  return (
    <Select
      style={{ width: "100%" }}
      error={error ? true : false}
      onChange={input.onChange}
      value={input.value}
      {...inputProps}
    >
      {options &&
        options.map((x, i) => {
          return (
            <MenuItem key={i} value={x[val]}>
              {x[property]}
            </MenuItem>
          );
        })}
    </Select>
  );
};
export default SelectInput;

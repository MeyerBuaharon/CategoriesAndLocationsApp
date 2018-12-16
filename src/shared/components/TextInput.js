import React from "react";
import TextField from "@material-ui/core/TextField";

const TextInput = ({ input, meta:{error}, ...inputProps }) => (
    <TextField
      label={input.label}
      value={input.value}
      error={error ? true : false}
      onChange={input.onChange}
      {...inputProps}
    />
);

export default TextInput;

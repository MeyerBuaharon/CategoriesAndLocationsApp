import React from "react";
import { branch, renderComponent, renderNothing } from "recompose";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import { Delete, Edit } from "@material-ui/icons";
const LocationItem = ({ location, deleteItem, selectItem, openMap }) => {
  return (
    <ListItem>
      <ListItemSecondaryAction>
        <IconButton
          onClick={() => {
            deleteItem(location);
          }}
        >
          <Delete />
        </IconButton>
        <IconButton
          onClick={() => {
            selectItem(location);
          }}
        >
          <Edit />
        </IconButton>
      </ListItemSecondaryAction>
      <ListItemText
        onClick={() => {
          openMap(location);
          navigator.vibrate(200);
        }}
        inset
        primary={location.Name}
      />
    </ListItem>
  );
};
export default branch(
  ({ filter, location }) => filter !== "" && location.Category !== filter,
  renderNothing,
  renderComponent(LocationItem)
)(LocationItem);

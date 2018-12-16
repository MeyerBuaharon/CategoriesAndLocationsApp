import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

const displayData = ({ selectedItem }) => [
  {
    label: "Name:",
    value: selectedItem.Name
  },
  {
    label: "Address:",
    value: selectedItem.Address
  },
  {
    label: "Latitude:",
    value: selectedItem.Coordinates.Lat
  },
  {
    label: "Longtitude:",
    value: selectedItem.Coordinates.Lon
  },
  {
    label: "Category:",
    value: selectedItem.Category.Category
  }
];

const LocationDisplay = ({ selectedItem }) => {
  return (
    <List>
      {displayData({ selectedItem }).map((x, id) => (
        <ListItem key={id}>
          <ListItemText primary={`${x.label} ${x.value}`} />
        </ListItem>
      ))}
    </List>
  );
};
export default LocationDisplay;

import React from "react";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import LocationItem from "./LocationItem";

const Grouped = ({
  filter,
  deleteItem,
  selectItem,
  openMap,
  categories,
  data
}) =>
  categories.map(x => {
    return (
      <List key={x._id} subheader={<ListSubheader>{x.Category}</ListSubheader>}>
        {data.filter(y => y.Category === x._id).map(y => (
          <LocationItem
            filter={filter}
            key={y._id}
            deleteItem={deleteItem}
            selectItem={selectItem}
            location={y}
            openMap={openMap}
          />
        ))}
      </List>
    );
  });

const UnGrouped = ({ filter, deleteItem, selectItem, openMap, data }) => (
  <List>
    {data.map(x => (
      <LocationItem
        filter={filter}
        key={x._id}
        deleteItem={deleteItem}
        selectItem={selectItem}
        location={x}
        openMap={openMap}
      />
    ))}
  </List>
);

const LocationView = ({
  deleteItem,
  selectItem,
  categories,
  data,
  openMap,
  grouped,
  filter
}) => {
  return grouped ? (
    <Grouped
      deleteItem={deleteItem}
      selectItem={selectItem}
      openMap={openMap}
      filter={filter}
      data={data}
      categories={categories}
    />
  ) : (
    <UnGrouped
      deleteItem={deleteItem}
      selectItem={selectItem}
      openMap={openMap}
      filter={filter}
      data={data}
    />
  );
};

export default LocationView;

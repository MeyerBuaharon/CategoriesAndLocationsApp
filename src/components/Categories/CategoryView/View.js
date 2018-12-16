import React from "react";
import List from "@material-ui/core/List";
import CategoryItem from "./CategoryItem";
const View = ({ deleteItem, selectItem, data }) => (
  <List component="nav">
    {data.map(x => (
      <CategoryItem
        key={x._id}
        deleteItem={deleteItem}
        selectItem={selectItem}
        item={x}
      />
    ))}
  </List>
);

export default View;

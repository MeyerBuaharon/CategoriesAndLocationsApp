import React from "react";
import { Container, Content, StyledToolbar } from "../../shared/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";
import * as actions from "../../reducers/categories/actions";
import CategoryList from "./CategoryView/View";
import { compose, withHandlers, withState } from "recompose";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CategoryForm from "./CategoryForm";

const Categories = ({
  category,
  setOpen,
  open,
  deleteItem,
  selectItem,
  selectedItem,
  updateItem,
  createItem
}) => (
  <Container>
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="title" color="inherit">
          Categories
        </Typography>
        <Button
          color="inherit"
          onClick={() => {
            setOpen(true);
          }}
        >
          Create
        </Button>
      </StyledToolbar>
    </AppBar>
    <Content>
      <CategoryList
        data={category}
        deleteItem={deleteItem}
        selectItem={selectItem}
      />
    </Content>
    <Dialog open={open} onClose={() => setOpen(false)}>
      <DialogTitle id="form-dialog-title">
        {selectedItem ? "Update" : "Create"}
      </DialogTitle>
      <DialogContent>
        <CategoryForm
          obj={selectedItem}
          onSubmit={selectedItem ? updateItem : createItem}
        />
      </DialogContent>
    </Dialog>
  </Container>
);

export default compose(
  connect(
    state => ({
      category: state.categoryReducer.categories
    }),
    {
      createCategory: actions.addCategory,
      deleteCategory: actions.removeCategory,
      updateCategory: actions.updateCategory
    }
  ),
  
  withState("open", "setOpen", false),
  withState("selectedItem", "setItem", null),
  withHandlers({
    createItem: ({ setOpen, createCategory }) => newCategory => {
      createCategory(newCategory);
      setOpen(false);
    },
    deleteItem: ({ deleteCategory }) => category => {
      deleteCategory(category);
    },
    updateItem: ({ updateCategory, setOpen, setItem }) => category => {
      updateCategory(category);
      setItem(null);
      setOpen(false);
    },
    selectItem: ({ setOpen, setItem }) => category => {
      setItem(category);
      setOpen(true);
    }
  })
)(Categories);

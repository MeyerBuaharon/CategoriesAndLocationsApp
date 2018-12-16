import React from "react";
import LocationForm from "./LocationForm";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import * as actions from "../../reducers/locations/actions";
import { connect } from "react-redux";
import { Container, Content, StyledToolbar } from "../../shared/styles";
import LocationView from "./LocationView/LocationView";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Map from "../../shared/Map";
import LocationDisplay from "./LocationDisplay";
import { withState, compose, withHandlers } from "recompose";

//should always display buttons
const ViewMap = ({ view, setView, selectedItem, getItemWithCategory }) => {
  if (view === null) {
    return (
      <div>
        <Button
          color="inherit"
          onClick={() => {
            setView(true);
          }}
        >
          Map
        </Button>
        <Button
          color="inherit"
          onClick={() => {
            setView(false);
          }}
        >
          Properties
        </Button>
      </div>
    );
  }
  if (view === true) {
    return (
      <Map
        lat={selectedItem ? selectedItem.Coordinates.Lat : null}
        lon={selectedItem ? selectedItem.Coordinates.Lat : null}
      />
    );
  }
  if (view === false) {
    return <LocationDisplay selectedItem={getItemWithCategory(selectedItem)} />;
  }
};

const Location = ({
  selectedCategory,
  grouped,
  setGrouped,
  sortLocation,
  setOpen,
  open,
  setSelectedItem,
  selectedItem,
  updateItem,
  createItem,
  showMap,
  setView,
  mapShow,
  setMapShow,
  view,
  getItemWithCategory,
  deleteItem,
  selectItem,
  category,
  location,
  onSelected
}) => (
  <Container>
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="title" color="inherit">
          Location
        </Typography>
        <div>
          <Select
            style={{ color: "white" }}
            onChange={onSelected}
            value={selectedCategory}
          >
            <MenuItem value="">NoFilter</MenuItem>

            {category.map(x => (
              <MenuItem key={x._id} value={x._id}>
                {x.Category}
              </MenuItem>
            ))}
          </Select>
          <Button
            color="inherit"
            onClick={() => {
              setGrouped(!grouped);
            }}
          >
            {grouped ? "UnGroup" : "Group"}
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              sortLocation();
            }}
          >
            Sort
          </Button>
          <Button
            color="inherit"
            onClick={() => {
              setOpen(true);
            }}
          >
            Create
          </Button>
        </div>
      </StyledToolbar>
    </AppBar>
    <Content>
      <LocationView
        grouped={grouped}
        categories={category}
        data={location}
        deleteItem={deleteItem}
        selectItem={selectItem}
        openMap={showMap}
        filter={selectedCategory}
      />
    </Content>
    <Dialog
      open={open}
      onClose={() => {
        setOpen(false);
        setSelectedItem(null);
      }}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        {selectedItem ? "Update" : "Create"}
      </DialogTitle>
      <DialogContent>
        <LocationForm
          categories={category}
          obj={selectedItem || null}
          onSubmit={selectedItem ? updateItem : createItem}
        />
      </DialogContent>
    </Dialog>
    <Dialog
      open={mapShow}
      onClose={() => {
        setMapShow(false);
        setSelectedItem(null);
        setView(null);
      }}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">
        {selectedItem ? selectedItem.Name : ""}
      </DialogTitle>

      <DialogContent style={{ height: "400px", width: "400px" }}>
        <ViewMap
          view={view}
          setView={setView}
          selectedItem={selectedItem}
          getItemWithCategory={getItemWithCategory}
        />
      </DialogContent>
    </Dialog>
  </Container>
);

export default compose(
  connect(
    state => ({
      category: state.categoryReducer.categories,
      location: state.locationReducer.Locations
    }),
    {
      createLocation: actions.addLocation,
      removeLocation: actions.removeLocation,
      updateLocation: actions.updateLocation,
      sortLocation: actions.sortLocation
    }
  ),
  //change to setOpen
  withState("open", "setOpen", false),
  withState("grouped", "setGrouped", false),
  withState("selectedItem", "setSelectedItem", null),
  withState("selectedCategory", "setSelectedCategory", ""),
  withState("mapShow", "setMapShow", false),
  withState("view", "setView", null),
  withHandlers({
    createItem: ({ setOpen, createLocation }) => Location => {
      createLocation({
        Name: Location.Name,
        Address: Location.Address,
        Coordinates: { Lat: Location.Lat, Lon: Location.Lon },
        Category: Location.Category
      });
      setOpen(false);
    },
    deleteItem: ({ removeLocation }) => Location => {
      removeLocation(Location);
    },
    updateItem: ({ setOpen, updateLocation, setSelectedItem }) => Location => {
      updateLocation({
        _id: Location._id,
        Name: Location.Name,
        Address: Location.Address,
        Coordinates: { Lat: Location.Lat, Lon: Location.Lon },
        Category: Location.Category
      });
      setSelectedItem(null);
      setOpen(false);
    },
    selectItem: ({ setOpen, setSelectedItem }) => Location => {
      setOpen(true);
      setSelectedItem(Location);
    },
    onSelected: ({ setSelectedCategory }) => Event => {
      setSelectedCategory(Event.target.value);
    },
    showMap: ({ setSelectedItem, setMapShow }) => Location => {
      setSelectedItem(Location);
      setMapShow(true);
    },
    getCategory: ({ category }) => CategoryId => {
      return category.find(x => x._id === CategoryId);
    }
  }),
  withHandlers({
    getItemWithCategory: ({ getCategory }) => Item => {
      return { ...Item, Category: getCategory(Item.Category) };
    }
  })
)(Location);

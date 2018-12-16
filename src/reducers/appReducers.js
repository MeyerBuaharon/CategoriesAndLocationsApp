import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import locationReducer from './locations/reducers';
import categoryReducer from './categories/reducers';
export default combineReducers({
  form,
  locationReducer,
  categoryReducer
});

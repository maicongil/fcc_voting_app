/**
 * Root Reducer
 */
import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

// Import Reducers
import app from './modules/App/AppReducer';
import posts from './modules/Post/PostReducer';
import intl from './modules/Intl/IntlReducer';
import polls from './modules/Poll/PollReducer';

// Combine all reducers into one root reducer
export default combineReducers({
  app,
  posts,
  intl,
  polls,
  form : formReducer
});

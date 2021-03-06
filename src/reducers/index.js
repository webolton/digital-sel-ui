import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import home from './home.reducer';
import authentication from './authenticationReducer';
import users from './usersReducer';
import user from './userReducer';
import manuscripts from './manuscriptReducer';
import saintsLegends from './saintsLegendReducer';
import alert from './alertReducer';

const rootReducer = combineReducers({
  authentication,
  users,
  user,
  alert,
  home,
  manuscripts,
  saintsLegends,
  form: formReducer,
});

export default rootReducer;

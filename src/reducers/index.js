import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import home from './home.reducer';
import authentication from './authenticationReducer';
import users from './usersReducer';
import user from './userReducer';
import alert from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  user,
  alert,
  home,
  form: formReducer,
});

export default rootReducer;

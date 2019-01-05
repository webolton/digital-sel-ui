import { combineReducers } from 'redux';
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
});

export default rootReducer;

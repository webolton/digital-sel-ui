import { combineReducers } from 'redux';
import home from './home.reducer';
import authentication from './authentication.reducer';
import users from './users.reducer';
import user from './user.reducer';
import alert from './alert.reducer';

const rootReducer = combineReducers({
  authentication,
  users,
  user,
  alert,
  home,
});

export default rootReducer;

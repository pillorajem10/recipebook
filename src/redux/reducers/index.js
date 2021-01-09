import { combineReducers } from 'redux';

import category from './category';
import recipe from './recipe';
import user from './user';

const reducer = combineReducers({
  category,
  recipe,
  user,
});

export default reducer;

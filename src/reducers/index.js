import { combineReducers } from 'redux';

import items from './items';
import basket from './basket';

const rootReducer = combineReducers({ items, basket });

export default rootReducer;

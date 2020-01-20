import { combineReducers } from 'redux';

import items from './items';
import isWidgetActive from './widget';

const rootReducer = combineReducers({ items, isWidgetActive });

export default rootReducer;

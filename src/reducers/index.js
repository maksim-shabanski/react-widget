import { combineReducers } from 'redux';

import items from './items';
import isWidgetOpened from './widget';

const rootReducer = combineReducers({ items, isWidgetOpened });

export default rootReducer;

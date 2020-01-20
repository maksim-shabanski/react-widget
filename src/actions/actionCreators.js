import {
  SELECT_ITEM,
  CHANGE_ITEM,
  SHOW_WIDGET,
  HIDE_WIDGET,
} from 'constants/actionTypes';

export const selectItem = ids => ({
  type: SELECT_ITEM,
  ids,
});

export const changeItem = id => ({
  type: CHANGE_ITEM,
  id,
});

export const showWidget = () => ({
  type: SHOW_WIDGET,
});

export const hideWidget = () => ({
  type: HIDE_WIDGET,
});

import {
  SELECT_ITEMS,
  DESELECT_ITEM,
  SHOW_WIDGET,
  HIDE_WIDGET,
} from 'constants/actionTypes';

export const selectItems = selectedItems => ({
  type: SELECT_ITEMS,
  selectedItems,
});

export const deselectItem = id => ({
  type: DESELECT_ITEM,
  id,
});

export const showWidget = () => ({
  type: SHOW_WIDGET,
});

export const hideWidget = () => ({
  type: HIDE_WIDGET,
});

import { SELECT_ITEM, CHANGE_ITEM } from 'constants/actionTypes';

export const selectItem = ids => ({
  type: SELECT_ITEM,
  ids,
});

export const changeItem = id => ({
  type: CHANGE_ITEM,
  id,
});

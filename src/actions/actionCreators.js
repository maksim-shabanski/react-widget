import {
  SELECT_ITEM,
  ADD_ITEM_TO_BASKET,
  REMOVE_ITEM_FROM_BASKET,
} from 'constants/actionTypes';

export const selectItem = id => ({
  type: SELECT_ITEM,
  id,
});

export const addItemToBasket = (id, title) => ({
  type: ADD_ITEM_TO_BASKET,
  id,
  title,
});

export const removeItemFromBasket = id => ({
  type: REMOVE_ITEM_FROM_BASKET,
  id,
});

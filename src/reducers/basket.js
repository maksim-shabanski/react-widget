import {
  ADD_ITEM_TO_BASKET,
  REMOVE_ITEM_FROM_BASKET,
} from 'constants/actionTypes';

const basket = (state = [], { type, id, title }) => {
  switch (type) {
    case ADD_ITEM_TO_BASKET:
      return [...state, { id, title }];
    case REMOVE_ITEM_FROM_BASKET:
      return [...state].filter(item => item.id !== id);
    default:
      return state;
  }
};

export default basket;

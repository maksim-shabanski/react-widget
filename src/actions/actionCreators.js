import { CHECK_ITEM } from 'constants/actionTypes';

// eslint-disable-next-line
export const checkItem = id => ({
  type: CHECK_ITEM,
  id,
});

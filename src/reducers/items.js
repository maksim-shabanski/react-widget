import { SELECT_ITEM, CHANGE_ITEM } from 'constants/actionTypes';

const initialState = [...new Array(300)].map((item, index) => ({
  id: index,
  title: `Элемент ${index}`,
  isChecked: false,
}));

const items = (state = initialState, { type, id, ids }) => {
  switch (type) {
    case SELECT_ITEM:
      return [...state].map(item => {
        item.isChecked = ids.includes(item.id);
        return item;
      });
    case CHANGE_ITEM:
      return [...state].map(item => {
        if (item.id === id) {
          item.isChecked = false;
        }
        return item;
      });
    default:
      return state;
  }
};

export default items;

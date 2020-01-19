import { CHECK_ITEM } from 'constants/actionTypes';

const initialState = [...new Array(300)].map((item, index) => ({
  id: index,
  title: `Элемент ${index}`,
  isChecked: false,
}));

const items = (state = initialState, { type, id }) => {
  switch (type) {
    case CHECK_ITEM:
      return [...state].map(item => {
        if (item.id === id) {
          item.isChecked = !item.isChecked;
        }
        return item;
      });
    default:
      return state;
  }
};

export default items;

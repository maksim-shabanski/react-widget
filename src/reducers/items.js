import { SELECT_ITEMS, DESELECT_ITEM } from 'constants/actionTypes';

const initialState = [...new Array(300)].map((item, index) => ({
  id: index + 1,
  text: `Элемент ${index + 1}`,
  isChecked: false,
}));

const items = (state = initialState, { type, id, selectedItems }) => {
  switch (type) {
    case SELECT_ITEMS:
      return state.map(item => ({
        ...item,
        isChecked: selectedItems.some(
          selectedItem => selectedItem.id === item.id
        ),
      }));
    case DESELECT_ITEM:
      return state.map(item => ({
        ...item,
        isChecked: item.id === id ? !item.isChecked : item.isChecked,
      }));
    default:
      return state;
  }
};

export default items;

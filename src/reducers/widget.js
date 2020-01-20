import { SHOW_WIDGET, HIDE_WIDGET } from 'constants/actionTypes';

const widget = (state = false, { type }) => {
  switch (type) {
    case SHOW_WIDGET:
      return true;
    case HIDE_WIDGET:
      return false;
    default:
      return state;
  }
};

export default widget;

import React from 'react';
import { connect } from 'react-redux';

import {
  selectItem,
  addItemToBasket,
  removeItemFromBasket,
} from 'actions/actionCreators';
import Widget from 'components/Widget';

const WidgetContainer = props => <Widget {...props} />;

const mapStateToProps = ({ items, basket }) => ({
  items,
  basket,
});

const mapdDispatchToProps = dispacth => ({
  selectItem: id => dispacth(selectItem(id)),
  addItemToBasket: (id, title) => dispacth(addItemToBasket(id, title)),
  removeItemFromBasket: id => dispacth(removeItemFromBasket(id)),
});

export default connect(mapStateToProps, mapdDispatchToProps)(WidgetContainer);

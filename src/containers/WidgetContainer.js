import React from 'react';
import { connect } from 'react-redux';

import { selectItems, hideWidget } from 'actions/actionCreators';
import Widget from 'components/Widget';

const WidgetContainer = props => <Widget {...props} />;

const mapStateToProps = ({ items }) => ({
  items,
});

const mapdDispatchToProps = dispacth => ({
  selectItems: selectedItems => dispacth(selectItems(selectedItems)),
  hideWidget: () => dispacth(hideWidget()),
});

export default connect(mapStateToProps, mapdDispatchToProps)(WidgetContainer);

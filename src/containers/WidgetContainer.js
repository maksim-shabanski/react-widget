import React from 'react';
import { connect } from 'react-redux';

import { selectItem, hideWidget } from 'actions/actionCreators';
import Widget from 'components/Widget';

const WidgetContainer = props => <Widget {...props} />;

const mapStateToProps = ({ items }) => ({
  items,
});

const mapdDispatchToProps = dispacth => ({
  selectItem: ids => dispacth(selectItem(ids)),
  hideWidget: () => dispacth(hideWidget()),
});

export default connect(mapStateToProps, mapdDispatchToProps)(WidgetContainer);

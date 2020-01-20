import React from 'react';
import { connect } from 'react-redux';

import { selectItem } from 'actions/actionCreators';
import Widget from 'components/Widget';

const WidgetContainer = props => <Widget {...props} />;

const mapStateToProps = ({ items }) => ({
  items,
});

const mapdDispatchToProps = dispacth => ({
  selectItem: ids => dispacth(selectItem(ids)),
});

export default connect(mapStateToProps, mapdDispatchToProps)(WidgetContainer);

import React from 'react';
import { connect } from 'react-redux';

import { checkItem } from 'actions/actionCreators';
import Widget from 'components/Widget';

const WidgetContainer = props => <Widget {...props} />;

const mapStateToProps = ({ items }) => ({
  items,
});

const mapdDispatchToProps = dispacth => ({
  checkItem: id => dispacth(checkItem(id)),
});

export default connect(mapStateToProps, mapdDispatchToProps)(WidgetContainer);

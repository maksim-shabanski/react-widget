import React from 'react';
import { connect } from 'react-redux';

import { deselectItem, showWidget } from 'actions/actionCreators';
import Dashboard from 'components/Dashboard';

const DashboardContainer = props => <Dashboard {...props} />;

const mapStateToProps = ({ items }) => ({
  items,
});

const mapDispatchToProps = dispatch => ({
  deselectItem: id => dispatch(deselectItem(id)),
  showWidget: () => dispatch(showWidget()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

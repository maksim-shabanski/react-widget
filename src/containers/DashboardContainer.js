import React from 'react';
import { connect } from 'react-redux';

import { changeItem, showWidget } from 'actions/actionCreators';
import Dashboard from 'components/Dashboard';

const DashboardContainer = props => <Dashboard {...props} />;

const mapStateToProps = ({ items }) => ({
  items,
});

const mapDispatchToProps = dispatch => ({
  changeItem: ids => dispatch(changeItem(ids)),
  showWidget: () => dispatch(showWidget()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);

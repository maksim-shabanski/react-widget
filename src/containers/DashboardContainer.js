import React from 'react';
import { connect } from 'react-redux';

import Dashboard from 'components/Dashboard';

const DashboardContainer = props => <Dashboard {...props} />;

const mapStateToProps = ({ basket }) => ({
  basket,
});

export default connect(mapStateToProps, null)(DashboardContainer);

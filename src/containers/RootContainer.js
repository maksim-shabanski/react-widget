import React from 'react';
import { connect } from 'react-redux';

import { showWidget, hideWidget } from 'actions/actionCreators';
import Root from 'components/Root';

const RootContainer = props => <Root {...props} />;

const mapStateToProps = ({ isWidgetOpened }) => ({
  isWidgetOpened,
});

const mapdDispatchToProps = dispacth => ({
  showWidget: () => dispacth(showWidget()),
  hideWidget: () => dispacth(hideWidget()),
});

export default connect(mapStateToProps, mapdDispatchToProps)(RootContainer);

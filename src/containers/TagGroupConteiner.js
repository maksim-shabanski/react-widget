import React from 'react';
import { connect } from 'react-redux';

import { selectItem, removeItemFromBasket } from 'actions/actionCreators';
import TagGroup from 'components/TagGroup';

const TagGroupContainer = props => <TagGroup {...props} />;

const mapStateToProps = ({ basket }) => ({
  basket,
});

const mapdDispatchToProps = dispacth => ({
  selectItem: id => dispacth(selectItem(id)),
  removeItemFromBasket: id => dispacth(removeItemFromBasket(id)),
});

export default connect(mapStateToProps, mapdDispatchToProps)(TagGroupContainer);

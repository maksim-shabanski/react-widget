import React from 'react';
import PropTypes from 'prop-types';

const WidgetSearch = ({ searchText, onChange }) => (
  <div className="widget__search">
    <label htmlFor="widget-search">
      Search
      <input
        id="widget-search"
        className="widget__input"
        type="text"
        value={searchText}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  </div>
);

WidgetSearch.propTypes = {
  searchText: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default WidgetSearch;

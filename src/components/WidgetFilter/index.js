import React from 'react';
import PropTypes from 'prop-types';

const WidgetFilter = ({ onChange }) => (
  <div className="widget__filter">
    <label htmlFor="widget-select">
      Filter
      <select
        id="widget-select"
        className="widget__select"
        onChange={e => onChange(e.target.value)}
      >
        <option value="0">Without a filter</option>
        <option value="10">Number &gt; 10</option>
        <option value="100">Number &gt; 100</option>
        <option value="200">Number &gt; 200</option>
      </select>
    </label>
  </div>
);

WidgetFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default WidgetFilter;

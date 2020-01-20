import React from 'react';
import PropTypes from 'prop-types';

const WidgetFilter = ({ onChange }) => (
  <div className="widget__filter">
    Фильтр
    <select onChange={e => onChange(e.target.value)}>
      <option value="0">Без фильтра</option>
      <option value="10">Номер &gt; 10</option>
      <option value="100">Номер &gt; 100</option>
      <option value="200">Номер &gt; 200</option>
    </select>
  </div>
);

WidgetFilter.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default WidgetFilter;

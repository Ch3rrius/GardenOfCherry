import React from 'react';
import '../YearFilter.css';

const YearFilter = ({ years, selectedYear, onYearChange }) => {
  return (
    <div className="year-filter">
      {years.map(year => (
        <button
          key={year}
          className={`year-button ${selectedYear === year ? 'active' : ''}`}
          onClick={() => onYearChange(year)}
        >
          {year}
        </button>
      ))}
    </div>
  );
};

export default YearFilter;

import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className="Container">
      <p className="Item">
        Good: <span className="Value">{good}</span>
      </p>
      <p className="Item">
        Neutral: <span className="Value">{neutral}</span>
      </p>
      <p className="Item">
        Bad: <span className="Value">{bad}</span>
      </p>
      <p className="Item">
        Total: <span className="Value">{total}</span>
      </p>
      <p className="Item">
        Positive feedback: <span className="Value">{positivePercentage}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

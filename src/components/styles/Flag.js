import React from 'react';

const Flag = ({ width = '18', height = '27', fill = 'none' }) => (
  <svg width={width} height={height} viewBox="0 0 18 27" fill={fill} xmlns="http://www.w3.org/2000/svg">
    <rect y="23" width="18" height="4" fill="black" />
    <rect x="5" y="21" width="8" height="2" fill="black" />
    <line x1="9" y1="12" x2="9" y2="21" stroke="black" strokeWidth="2" />
    <path d="M1 7.5L10 1.00481L10 13.9952L1 7.5Z" fill="#EB5757" />
  </svg>
);

export default Flag;

import React from 'react';

const Prev = ({ ...props }) => (
  <svg {...props} viewBox="0 0 50 80" xmlSpace="preserve">
    <polyline
      fill="none"
      stroke="currentColor"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      points="45.63,75.8 0.375,38.087 45.63,0.375"
    />
  </svg>
);

export default Prev;

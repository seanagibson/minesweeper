import React from 'react';

const Mine = ({ height = '71', width = '70' }) => (
  <svg width={width} height={height} viewBox="0 0 71 70" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="35" cy="35" r="25" fill="black" />
    <line x1="33.5" y1="10" x2="34.5" stroke="black" stroke-width="3" />
    <line x1="33.5" y1="70" x2="34.5" y2="60" stroke="black" stroke-width="3" />
    <line x1="70.0411" y1="36.0903" x2="60.0303" y2="35.2055" stroke="black" strokeWidth="3" />
    <line x1="10.028" y1="35.4998" x2="0.0171498" y2="34.6151" stroke="black" strokeWidth="3" />
    <line x1="12.1808" y1="57.1605" x2="16.1959" y2="51.4264" stroke="black" strokeWidth="2" />
    <line x1="17.2426" y1="16.6569" x2="12.2929" y2="11.7071" stroke="black" strokeWidth="2" />
    <line x1="57.2427" y1="57.6569" x2="52.2929" y2="52.7071" stroke="black" strokeWidth="2" />
    <line x1="52.234" y1="17.7195" x2="56.7335" y2="12.3572" stroke="black" strokeWidth="2" />
    <circle cx="26" cy="27" r="6" fill="white" />
  </svg>
);

export default Mine;

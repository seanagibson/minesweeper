import React from 'react';
import StyledCounter from './styles/StyledCounter';

const TimerCounter = ({ timer }) => <StyledCounter>{timer <= 999 ? timer : 999}</StyledCounter>;

export default TimerCounter;

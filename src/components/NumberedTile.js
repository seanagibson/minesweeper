import React from 'react';
import StyledNumberedTile from './styles/StyledNumberedTile';

const NumberedTile = props => {
  return <StyledNumberedTile num={props.num}>{props.num}</StyledNumberedTile>;
};

export default NumberedTile;

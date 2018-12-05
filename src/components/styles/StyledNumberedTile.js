import styled from 'styled-components';

const StyledNumberedTile = styled.h1`
  color: ${props => {
    if (props.num === 1) {
      return 'green';
    } else if (props.num === 2) {
      return 'blue';
    } else {
      return 'red';
    }
  }};
  background: ${props => props.theme.lightgrey};
  border: 1px solid ${props => props.theme.grey};
  font-weight: bold;
  font-size: 14px;
  margin: 0px;
  padding: 0px;
  text-align: center;
  height: 25px;
  width: 25px;
`;

export default StyledNumberedTile;

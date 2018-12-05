import styled from 'styled-components';

const StyledBoardTile = styled.div`
  background: ${props => props.theme.lightGrey};
  min-height: 30px;
  min-width: 30px;
  .empty-tile {
    background-color: ${props => props.theme.lightgrey};
    border: 1px solid ${props => props.theme.grey};
    height: 25px;
    width: 25px;
  }
`;

export default StyledBoardTile;

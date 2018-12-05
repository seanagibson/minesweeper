import styled from 'styled-components';

const StyledGameBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 24px);
  grid-template-rows: repeat(${props => props.rows}, 24px);
  border-bottom: 3.5px solid ${props => props.theme.offWhite};
  border-right: 3.5px solid ${props => props.theme.offWhite};
  border-top: 3.5px solid ${props => props.theme.grey};
  border-left: 3.5px solid ${props => props.theme.grey};
`;

export default StyledGameBoard;

import styled from 'styled-components';

const StyledGame = styled.div`
  background-color: ${props => props.theme.lightgrey};
  border-top: 3.5px solid ${props => props.theme.offWhite};
  border-left: 3.5px solid ${props => props.theme.offWhite};
  border-right: 3.5px solid ${props => props.theme.grey};
  border-bottom: 3.5px solid ${props => props.theme.grey};
  margin: 20px;
  padding: 10px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr;
  grid-template-rows: 75px 1fr;
  grid-template-areas:
    'header'
    'gameBoard';
`;

export default StyledGame;

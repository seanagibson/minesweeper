import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: ${props => props.theme.lightgrey};
  border-bottom: 3.5px solid ${props => props.theme.offWhite};
  border-right: 3.5px solid ${props => props.theme.offWhite};
  border-top: 3.5px solid ${props => props.theme.grey};
  border-left: 3.5px solid ${props => props.theme.grey};
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 10px;
`;

export default StyledHeader;

import styled from 'styled-components';

const StyledTileBtn = styled.button`
  background: ${props => props.theme.lightgrey};
  border-bottom: 3.5px solid ${props => props.theme.grey};
  border-right: 3.5px solid ${props => props.theme.grey};
  border-top: 3.5px solid ${props => props.theme.offWhite};
  border-left: 3.5px solid ${props => props.theme.offWhite};
  cursor: pointer;
  height: 25px;
  width: 25px;
  padding: 0px;
`;

export default StyledTileBtn;

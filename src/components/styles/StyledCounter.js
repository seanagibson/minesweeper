import styled from 'styled-components';

const StyledCounter = styled.div`
  background-color: ${props => props.theme.black};
  font-family: 'Wallpoet', cursive;
  font-size: 35px;
  color: ${props => props.theme.red};
  width: 100px;
  height: 50px;
  text-align: center;
`;

export default StyledCounter;

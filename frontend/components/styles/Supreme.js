import styled from 'styled-components';

const Supreme = styled.h3`
  background: ${props => props.theme.blue};
  color: white;
  display: inline-block;
  padding: 4px 5px;
  transform: skew(-3deg);
  margin: 0;
  font-size: 2em;
  text-align: center;
`;

export default Supreme;

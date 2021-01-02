import styled from 'styled-components';

export const StyledCell = styled.div`
  width: auto;
  background: rgba(${props => props.color}, 1);
  border: ${props => (props.type === 0 ? '0px' : '4px solid')};
  border-bottom-color: rgba( 0, 0, 0, 0.7);
  border-right-color: rgba( 0, 0, 0, 0.3);
  border-top-color: rgba( 255, 255, 255, 0.5);
  border-left-color: rgba( 0, 0, 0, 0.3);
`
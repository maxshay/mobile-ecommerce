import styled from 'styled-components';

export const ButtonContainer = styled.button`
  font-size: 1rem;
  text-transform: capitalize;
  background: transparent;
  border: none;
  border-radius: 3px;
  color: ${props => props.cart? "var(--mainYellow)" : "var(--lightBlue)"};
  padding: 0 0.7rem 0.4rem 0.5rem;
  cursor: pointer;
  margin: 0.2rem 0.5rem 0.2rem 0;
  transition: all 0.2s ease-in-out;
  &:hover{
    background: ${props => props.cart? "var(--mainYellow)" : "var(--lightBlue)"};
    color: var(--mainBlue);
  }
  &:focus {
    outline: none;
  }
`;
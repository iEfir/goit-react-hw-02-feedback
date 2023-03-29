import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 10px;
`;

const Button = styled.button`
  font-weight: 500;
  padding: 8px 13px;
  min-width: 80px;
  cursor: pointer;
  background: whitesmoke;
  border-radius: 4px;
  transition: background 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    background: #6181da;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
      0px 2px 1px rgba(0, 0, 0, 0.2);
  }
`;

export { Container, Button };

import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 0;
  background-color: ${({ secondary }) => (secondary ? '#E6E6E6' : '#FFD82B')};
  width: ${({ secondary }) => (secondary ? '105px' : '220px')};
  height: ${({ secondary }) => (secondary ? '30px' : '47px')};
  border: none;
  border-radius: 50px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: ${({ secondary }) => (secondary ? '10px' : '16px')};
  text-transform: uppercase;

  ${({ secondary }) =>
    secondary &&
    css`
      background-color: #e6e6e6;
      width: 105px;
      height: 30px;
      font-size: 10px;
    `}
`;
export default Button;

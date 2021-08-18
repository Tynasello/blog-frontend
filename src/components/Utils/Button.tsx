import React from "react";
import styled from "styled-components";

interface ButtonProps {
  type?: string;
  value?: string;
  onClick?: any;
  args?: any[];
  children?: any;
}

export const Button: React.FC<ButtonProps> = ({
  type,
  value,
  onClick,
  args = [],
  children,
}) => {
  if (onClick) {
    return (
      <ButtonContainer value={value} onClick={() => onClick(...args)}>
        {children}
      </ButtonContainer>
    );
  }
  return <ButtonContainer value={value}>{children}</ButtonContainer>;
};

const ButtonContainer = styled.button`
  max-width: 150px;
  display: block;
  margin: 1rem 0;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid grey;

  &:active {
    transform: scale(1.01);
  }
`;

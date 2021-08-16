import React from "react";
import styled from "styled-components";

interface ButtonProps {
  type?: string;
  value?: string;
}

export const Button: React.FC<ButtonProps> = ({ type, value }) => {
  return <ButtonContainer type={type} value={value}></ButtonContainer>;
};

const ButtonContainer = styled.input`
  width: auto;
  display: inline-block;
  padding: 0.3em 1.2em;
  margin: 1rem;
  border-radius: 2em;
  box-sizing: border-box;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-weight: 300;
  color: #ffffff;
  background-color: #4eb5f1;
  text-align: center;
  transition: all 0.2s;
  border: none;

  &:hover {
    background-color: #4095c6;
  }
`;

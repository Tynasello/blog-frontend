import React from "react";
import styled from "styled-components";

interface InputProps {
  type?: string;
  value?: string;
  onChange: any;
}

export const Input: React.FC<InputProps> = ({ type, value, onChange }) => {
  return (
    <InputContainer
      type={type}
      value={value}
      onChange={onChange}
    ></InputContainer>
  );
};

const InputContainer = styled.input`
  margin: 0.4rem 0;
  padding: 0.2rem 0.4rem;
`;

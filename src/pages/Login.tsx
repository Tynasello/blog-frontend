import React, { SyntheticEvent, useState } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import { Button } from "../components/Utils/Button";

interface loginProps {}

const Login: React.FC<loginProps> = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault();

    try {
      const req = await fetch(
        `https://tynasello-blog-api.herokuapp.com/blog/log-in`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const res = await req.json();

      if (req.status === 200) {
        localStorage.setItem("token", res.token);
        localStorage.setItem("auth", "true");
      } else {
        console.log(res);
        return;
      }

      <Redirect to="/posts" />;
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <LoginContainer>
      <LoginHeader>Login Page</LoginHeader>
      <Form onSubmit={handleSubmit}>
        <Label>Username: </Label>
        <Input
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        ></Input>
        <Label>Password:</Label>
        <Input
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        ></Input>
        <Button type="submit" value="Submit" />
      </Form>
    </LoginContainer>
  );
};
export default Login;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LoginHeader = styled.h3`
  padding: 2rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-width: 250px;
`;

const Label = styled.label`
  margin-top: 0.5rem;
`;
const Input = styled.input`
  margin-bottom: 0.5rem;
`;

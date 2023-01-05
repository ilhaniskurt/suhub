import React, { useState } from "react";
import {
  Background,
  Card,
  CheckBox,
  ColumnWrapper,
  Header,
  Input,
  PrimaryButton,
} from "../helpers/components";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [remember, setRemember] = useState(false);

  const handleRememberMe = () => {
    setRemember(!remember);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(remember);
    console.log(username);
    console.log(password);
  };

  return (
    <Background>
      <ColumnWrapper>
        <Header>SUHUB</Header>
        <Card>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Sign in to your account
          </h1>
          <form className="space-y-4 md:space-y-6" onSubmit={handleSignIn}>
            <Input
              type="text"
              onChange={setUsername}
              placeholder="firstname.lastname"
            >
              Your username
            </Input>
            <Input
              type="password"
              onChange={setPassword}
              placeholder="••••••••"
            >
              Your password
            </Input>
            <div className="flex items-center justify-between">
              <CheckBox flip={handleRememberMe}>Remember me</CheckBox>
            </div>
            <PrimaryButton>Sign in</PrimaryButton>
          </form>
        </Card>
      </ColumnWrapper>
    </Background>
  );
};

export default SignIn;

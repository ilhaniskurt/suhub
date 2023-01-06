import { useState, Dispatch, SetStateAction, FormEvent, FC } from "react";
import {
  Background,
  Card,
  CheckBox,
  ColumnWrapper,
  Header,
  Input,
  PrimaryButton,
} from "../helpers/components";
import { tryLogin } from "../services/auth";

type AuthProps = {
  setAuth: Dispatch<SetStateAction<boolean>>;
};

const SignIn: FC<AuthProps> = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [info, setInfo] = useState("");
  const [remember, setRemember] = useState(false);

  const handleRememberMe = () => {
    setRemember(!remember);
  };

  const handleSignIn = async (e: FormEvent) => {
    e.preventDefault();
    setInfo("")
    const error = await tryLogin(username, password);
    if (error) {
      setInfo(error)
    } else {
      setInfo("")
      props.setAuth(true);
    }
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
            <p className="text-sm font-light text-red-400 dark:text-red-200">{info}</p>
            </div>
            <PrimaryButton>Sign in</PrimaryButton>
          </form>
        </Card>
      </ColumnWrapper>
    </Background>
  );
};

export default SignIn;

import { useState, FormEvent, FC } from "react";
import {
  Background,
  Card,
  CheckBox,
  Wrapper,
  Header,
  Input,
  PrimaryButton,
} from "../components/common";
import { AuthProps } from "../helpers/props";
import { tryLogin } from "../services/auth";

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
    setInfo("");
    const [auth, error] = await tryLogin(username, password);
    if (error) {
      setInfo(error);
    } else {
      setInfo("");
      props.setAuth(auth);
    }
  };

  return (
    <Background>
      <Wrapper>
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
              <CheckBox id="remember" flip={handleRememberMe}>
                Remember me
              </CheckBox>
              <p className="text-sm font-light text-red-400 dark:text-red-200">
                {info}
              </p>
            </div>
            <PrimaryButton>Sign in</PrimaryButton>
          </form>
        </Card>
      </Wrapper>
    </Background>
  );
};

export default SignIn;

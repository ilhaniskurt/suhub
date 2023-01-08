import { useState } from "react";
import Dashboard from "./screens/Dashboard";
import SignIn from "./screens/SignIn";

const App = () => {
  const [auth, setAuth] = useState();

  return <>{auth ? <Dashboard auth={auth} setAuth={setAuth} /> : <SignIn auth={auth} setAuth={setAuth} />}</>;
};

export default App;

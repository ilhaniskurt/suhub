import { useState } from "react";
import Dashboard from "./screens/Dashboard";
import SignIn from "./screens/SignIn";

const App = () => {
  const [auth, setAuth] = useState(false);

  return <>{auth ? <Dashboard /> : <SignIn setAuth={setAuth}/>}</>;
};

export default App;

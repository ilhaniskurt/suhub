import React, { useState } from "react";
import Dashboard from "./screens/Dashboard";
import SignIn from "./screens/SignIn";

const App = () => {
  const [token, setToken] = useState();

  return <>{token ? <Dashboard /> : <SignIn />}</>;
};

export default App;

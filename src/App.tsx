import React, { useState } from "react";
import Dashboard from "./screens/Dashboard";
import Login from "./screens/Login";

const App = () => {
  const [token, setToken] = useState();

  return <>{token ? <Dashboard /> : <Login />}</>;
};

export default App;

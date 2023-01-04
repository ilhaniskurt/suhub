import React from "react";

const Login = () => {
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div>
      <h1>Please Log In</h1>
      <form onSubmit={handleLogin}>
        <label>
          <p>Username</p>
          <input type="text" />
        </label>
        <label>
          <p>Password</p>
          <input type="password" />
        </label>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
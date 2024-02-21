import React, { useState } from "react";

function Login({ setToken }) {
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const username = e.target.username.value;
    const password = e.target.password.value;

    //Input validation
    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    // See Word document for code example.
    //await performLogin(username, password);

    // Token needs to be sent to parent App component.

    try {
      const response = await fetch("http://localhost:3333/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();
      if (response.ok && data.uuid) {
        setToken(data.uuid);
      } else {
        setError(data.message || "Login failed");
      }
    } catch (error) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        {error && <div style={{ color: "red" }}>{error}</div>}
        <div style={{ marginBottom: 5 }}>
          <label htmlFor="username">Username: </label>
          <input id="username" name="username" type="text" />
        </div>
        <div style={{ marginBottom: 5 }}>
          <label htmlFor="password">Password: </label>
          <input id="password" name="password" type="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;

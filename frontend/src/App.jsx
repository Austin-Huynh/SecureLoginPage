import React from "react";
import "./App.css";
import Login from "./Login";
import Fact from "./Fact";
import Logout from "./Logout";
import "bootstrap/dist/css/bootstrap.min.css"; //using bootstrap for styling of spinner

function App() {
  const [token, setToken] = React.useState("");

  return (
    <div className="app">
      {/* Display login form if token is not set. */}
      {/* Display fact and logout if token is set. */}
      {/*<Fact />*/}
      <div className="app">
        {!token ? (
          <Login setToken={setToken} />
        ) : (
          <>
            <Fact token={token} />
            <Logout setToken={setToken} token={token} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;

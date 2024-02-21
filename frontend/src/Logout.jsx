import React from "react";

function Logout({ setToken, token }) {
  const handleLogout = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3333/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        setToken(""); // Clear the authentication state in the front-end
      } else {
        // Handle unsuccessful logout attempts here
        alert("Logout failed. Please try again.");
      }
    } catch (error) {
      console.error("Logout error:", error);
      alert("An error occurred during logout. Please try again.");
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}

export default Logout;

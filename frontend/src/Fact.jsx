import React, { useState, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";

function Fact({ token }) {
  const [fact, setFact] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getFact = async () => {
      setLoading(true); // Start loading
      try {
        setTimeout(async () => {
          const response = await fetch("http://localhost:3333/fact", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (!response.ok) throw new Error("Failed to fetch the fact");
          const data = await response.json();
          setFact(data.fact);
          setLoading(false); // Stop loading after fetching the fact (added delay to simulate loading time because fetch is too fast to see the spinner)
        }, 3000); // 3000 milliseconds = 3 seconds
      } catch (error) {
        console.error("Failed to fetch fact:", error);
        // Optionally handle the error state here
        setLoading(false); // Ensure loading is stopped in case of error
      }
    };

    getFact();
  }, [token]); // Dependency array with token to refetch if token changes

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }

  return (
    <>
      <h1>Fact</h1>
      <p>{fact}</p>
    </>
  );
}

export default Fact;

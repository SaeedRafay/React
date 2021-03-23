import React, { useEffect, useState } from "react";
import Joke from "./Joke";

function RandomJoke() {
  const [isLoading, setLoading] = useState(true);
  const [joke, setJoke] = useState({});
  const [hasError, setError] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setLoading(true);
    setError(false);
    setJoke({});
    async function fetchData() {
      try {
        const res = await fetch(
          "https://official-joke-api.appspot.com/random_joke"
        );
        const data = await res.json();
        setLoading(false);
        setJoke(() => data);
      } catch (err) {
        setLoading(false);
        setError(true);
        setErrMsg(err.message);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="RandomJoke">
      {isLoading && <p>Loading joke...</p>}
      {hasError && <p>Error loading joke: {errMsg}</p>}
      <Joke joke={joke} />
    </div>
  );
}

export default RandomJoke;

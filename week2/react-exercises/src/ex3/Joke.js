function Joke({ joke }) {
  return (
    <div className="Joke">
      {joke.setup && <p>{joke.setup}</p>}
      {joke.punchline && <p>{joke.punchline}</p>}
    </div>
  );
}

export default Joke;

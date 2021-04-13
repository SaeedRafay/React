function SearchWeather({ searchTerm, setSearchTerm, setSearchBtn }) {
  return (
    <div className="searchWeather">
      <input type="text" onChange={(e) => setSearchTerm(e.target.value)} />
      <button onClick={() => setSearchBtn(searchTerm)}>Search</button>
    </div>
  );
}

export default SearchWeather;

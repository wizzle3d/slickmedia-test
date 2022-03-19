import "../css/searchbar.css";

const SearchBar = ({ setQuery }) => {
  return (
    <div className="container">
      <label>Search</label>
      <input
        type="text"
        className="fm-input"
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

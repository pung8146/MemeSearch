import { useState } from "react";
import "./SearchBar.css";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="search-bar-container">
      <form onSubmit={handleSearch} className="search-bar">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="이미지 검색..."
          className="search-input"
        />
        <button type="submit" className="search-button">
          검색
        </button>
      </form>
    </div>
  );
};

export default SearchBar;

import React from "react";
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import SearchBar from "./SearchComponents/SearchBar";
import SearchFilters from "./SearchComponents/SearchFilters";
import ImageGrid from "./ResultComponents/ImageGrid";
import "./WebMain.css";

const WebMain: React.FC = () => {
  return (
    <div className="web-main">
      <Header />
      <main>
        <section className="search-section">
          <SearchBar />
          <SearchFilters />
        </section>
        <section className="results-section">
          <ImageGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WebMain;

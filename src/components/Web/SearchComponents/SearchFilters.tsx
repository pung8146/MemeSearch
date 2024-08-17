import "./SearchFilters.css";
const SearchFilters = () => {
  return (
    <div className="search-filters">
      <select>
        <option value="all">모든 크기</option>
        <option value="large">큰 이미지</option>
        <option value="medium">중간 이미지</option>
        <option value="small">작은 이미지</option>
      </select>
      {/* 추가적인 필터 옵션들 */}
    </div>
  );
};

export default SearchFilters;

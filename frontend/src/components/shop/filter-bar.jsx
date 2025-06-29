import "../../styles/shop/filter-bar.css";
import CategoryFilter from "../category-filter";
import SortFilter from "../sort-filter";

function FilterBar() {
  return (
    <div className="filter-bar">
      <CategoryFilter />
      <SortFilter />
    </div>
  );
}

export default FilterBar;

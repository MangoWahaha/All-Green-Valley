function CategoryFilter() {
  return (
    <div className="category">
      <div className="category-toggle" id="categoryToggle">
        <div className="list">
          <span>Kategori</span>
          <span className="arrow">&#9662;</span>
        </div>
        <div className="overlay"></div>
        <div className="shadow"></div>
      </div>

      <div className="menu" id="menu">
        <label htmlFor="indoor">
          <input type="checkbox" id="indoor" value="indoor" /> Tanaman Indoor
        </label>

        <label htmlFor="outdoor">
          <input type="checkbox" id="outdoor" value="outdoor" /> Tanaman Outdoor
        </label>

        <label htmlFor="pots">
          <input type="checkbox" id="pots" value="pots" /> Pot Tanaman
        </label>
      </div>
    </div>
  );
}

export default CategoryFilter;

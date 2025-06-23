function SortFilter() {
  return (
    <div className="sorting">
      <div className="sort-toggle" id="sortToggle">
        <div className="list">
          <span>Urutkan Dari</span>
          <span className="arrow">&#9662;</span>
        </div>
        <div className="overlay"></div>
        <div className="shadow"></div>
      </div>

      <div className="menu" id="sortMenu">
        <label data-value="new">Terbaru</label>
        <label data-value="populer">Terpopuler</label>
        <label data-value="smallest">Harga Terendah</label>
        <label data-value="biggest">Harga Tertinggi</label>
      </div>
    </div>
  );
}

export default SortFilter;

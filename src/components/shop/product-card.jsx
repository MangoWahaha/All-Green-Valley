function ProductCard({
  image,
  name,
  price,
  category,
  location,
  size,
  stock,
  rating,
  tags,
}) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">
          <span className="from-text">mulai dari</span>
          <span className="price">{price}</span>
        </p>

        <p className="product-category">{category}</p>
        <p className="product-location">{location}</p>
        <p className="product-size">{size}</p>
        <p className="product-stock">Stok: {stock}</p>

        <div className="product-rating">⭐ {rating}</div>

        <div className="product-tags">
          {tags.map((tag, index) => (
            <span className="tag" key={index}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

function ProductCard({
  image,
  name,
  price,
  category,
  location,
  size,
  stock,
  rating,
  reviews,
  tags = [],
}) {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />

      <div className="product-info">
        <h3 className="product-name">{name}</h3>
        <p className="product-price">
          <span className="from-text">Mulai dari</span>
          <span className="price">Rp {price.toLocaleString("id-ID")}</span>
        </p>

        <p className="product-category">{category}</p>
        <p className="product-size">{size}</p>
        <p className="product-stock">
          stok: {stock > 0 ? `Tersedia ${stock}` : "Habis"}
        </p>
        <p className="product-location">{location}</p>

        <div className="product-rating">
          ⭐ {rating} {reviews}
        </div>

        <div className="product-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

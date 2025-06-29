import ProductCard from "../product-card";
import "../../styles/shop/product-list.css";

function ProductList() {
  return (
    <div className="list-items">
      <ProductCard
        image={monsteraImage}
        name="Monstera 'Split-Leaf'"
        price={105000}
        category="Tanaman Indoor"
        size="Tinggi ±30 cm • Pot diameter 12 cm"
        stock={15}
        location="Jakarta • ±5 km dari lokasi Anda"
        rating={4.8}
        reviews={200}
        tags={["Best Seller", "Mudah Dirawat"]}
      />
    </div>
  );
}

export default ProductList;

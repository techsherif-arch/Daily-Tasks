import { useState } from "react";

function ProductList() {
  const [search, setSearch] = useState("");
  const [hoveredId, setHoveredId] = useState(null);

  const products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Headphones" },
    { id: 4, name: "Keyboard" }
  ];

  // Filter products
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "30px", textAlign: "center" }}>
      <h1> Product Store</h1>

      {/* Filter Input */}
      <input
        type="text"
        placeholder="Search product..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px" }}
      />

      {/* Conditional Rendering */}
      {filteredProducts.length > 0 ? (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {filteredProducts.map((product) => (
            <li
              key={product.id}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                padding: "15px",
                margin: "10px",
                border: "1px solid black",
                backgroundColor:
                  hoveredId === product.id ? "lightblue" : "white",
                cursor: "pointer"
              }}
            >
              {product.name}
            </li>
          ))}
        </ul>
      ) : (
        <h3>No products available</h3>
      )}
    </div>
  );
}

export default ProductList;
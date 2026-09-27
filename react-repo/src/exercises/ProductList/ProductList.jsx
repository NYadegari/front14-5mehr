// import React from "react";
import ProductCard from "./ProductCard.jsx";
import React from "react";
import styles from "./ProductList.module.scss";

const ProductList = () => {
  const products = [
    { id: 1, name: "Laptop", price: 1200, stock: 2 },
    { id: 2, name: "Phone", price: 1000, stock: 230 },
    { id: 3, name: "Headphone", price: 500, stock: 26 },
    { id: 4, name: "Socks", price: 30, stock: 20 },
  ];

  return (
    <section className={styles.container}>
      <h2>Products</h2>
      <div className={styles.productList}>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            stock={product.stock}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;

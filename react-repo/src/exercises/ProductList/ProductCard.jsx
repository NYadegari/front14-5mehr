import React from "react";
import styles from "./ProductList.module.scss";

const ProductCard = ({ name, price, stock }) => {
  return (
    <article className={styles.card}>
      <h3>{name}</h3>
      <p className={styles.price}>${price}</p>
      <span>{stock}</span>
    </article>
  );
};

export default ProductCard;

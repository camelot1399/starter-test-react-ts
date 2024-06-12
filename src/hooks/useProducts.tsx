import { useEffect, useState } from "react";
import { mocProducts, Product } from "../moc/products";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[] | []>([]);

  const getProducts = () => {
    const products = mocProducts;

    if (products) {
      setProducts(products);

      return;
    }

    return [];
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
  };
};

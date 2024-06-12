import { useEffect, useState } from "react";
import { Product } from "../moc/products";

export const useFilter = (products: Product[], filterProp: string) => {
  const [filteredProducts, setFilteredProducts] = useState<[] | Product[]>([]);

  useEffect(() => {
    const filteredProducts = !!filterProp.length
      ? products
          .map((product) => {
            if (product.name === filterProp) {
              return product;
            }
          })
          .filter((el) => el !== undefined)
      : products;

    setFilteredProducts(filteredProducts);
  }, [products, filterProp]);

  return {
    filteredProducts,
  };
};

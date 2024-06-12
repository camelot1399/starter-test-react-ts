import { useEffect, useState } from "react";
import { mocProducts, Product } from "../moc/products";
import { v4 as uuidv4 } from "uuid";

export function withProducts(Component: any) {
  return function (props: any) {
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

    const newList = products.map((el) => {
      if (el.name === "mouse") {
        return {
          ...el,
          name: "rf,ker",
        };
      }

      return el;
    });

    const addProduct = () => {
      setProducts([
        ...products,
        {
          id: uuidv4(),
          name: `new-product-${uuidv4().slice(0, 6)}`,
        },
      ]);
    };

    return (
      <Component {...props} products={products} handleChangeList={addProduct} />
    );
  };
}

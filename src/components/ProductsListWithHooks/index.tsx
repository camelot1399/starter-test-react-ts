import { useEffect, useState } from "react";
import { useProducts } from "../../hooks/useProducts";
import { Product } from "../../moc/products";
import { useFilter } from "../../hooks/useFilter";

const ProductsListWithHooks = () => {
  const { products } = useProducts();

  const [enteredLetters, setEneteredLetters] = useState("");

  const handleFilterInputChange = (letters: any) => {
    setEneteredLetters(letters.value);
  };

  const { filteredProducts } = useFilter(products, enteredLetters);

  return (
    <div>
      <h1>productsList</h1>

      <div className="filterBlock">
        <span>Фильтр</span>

        <input
          type="text"
          onKeyUp={(event) => handleFilterInputChange(event.target)}
        />
      </div>

      {filteredProducts.map((item) => (
        <div key={item.id}>name: {item.name}</div>
      ))}
    </div>
  );
};

export default ProductsListWithHooks;

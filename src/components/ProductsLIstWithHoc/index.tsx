import { FC } from "react";
import { Product } from "../../moc/products";
import { withProducts } from "../../hoc/withProducts";

interface Props {
  products: Product[];
  handleChangeList: () => void;
}

const ProductsListWithHoc: FC<Props> = ({
  products,
  handleChangeList,
  ...otherProps
}) => {
  return (
    <div>
      <h1>productsList</h1>

      <button onClick={handleChangeList}>click</button>

      {products.map((item) => (
        <div key={item.id}>name: {item.name}</div>
      ))}
    </div>
  );
};

export default withProducts(ProductsListWithHoc);

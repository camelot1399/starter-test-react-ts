import React, { useEffect, useState } from 'react'
import { Product, mocProducts } from '../../moc/products';

const ProductsList = () => {
  const [products, setProducts] = useState<Product[] | []>([]);

  const getProducts = () => {
    const products = mocProducts;

    if (products) {
      setProducts(products);
      
      return;
    } 

    return [];
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <h1>productsList</h1>

      {products.map(item => (
        <div key={item.id}>
          name: {item.name}
        </div>
      ))}
    </div>
  )
}

export default ProductsList

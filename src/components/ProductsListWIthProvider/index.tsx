import React, { useEffect, useState } from 'react'
import { Product, mocProducts } from '../../moc/products';
import useProducts from './ProductsContext/useProducts';

const ProductsListWIthProvider = () => {
  const [products, setProducts] = useState<Product[] | []>([]);

  const { page, setPage } = useProducts();

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
    // setPage(8)


    console.log('setPage', setPage);
    
  }, []);

  return (
    <div>
      <h1>ProductsListWIthProvider</h1>

      page: {page}


      <button onClick={() => setPage(5)}>click</button>

      {products.map(item => (
        <div key={item.id}>
          name: {item.name}
        </div>
      ))}
    </div>
  )
}

export default ProductsListWIthProvider

import { FC, PropsWithChildren, createContext, useCallback, useMemo, useState } from "react";
import { Product, mocProducts } from "../../../moc/products";

const DEFAULT_PAGE = 999;

export interface ContextProps {
  page: number;
  setPage: (value: number) => void;

  // products: Product[],
  // setProducts: () => 
}

export const ProductsContext = createContext<ContextProps>({
  page: DEFAULT_PAGE,
  setPage: () => {
    console.log(3213);
    
  },

  // products: 
  // setProducts
})


// const getProducts = () => {
//   const products = mocProducts;

//   if (products) {
//     setProducts(products);
    
//     return;
//   } 

//   return [];
// }

export const ProductsProvider: FC<PropsWithChildren> = ({children}) => {
  const [page, setPage] = useState(111111);

  const handlePageSize = (newPageSize: number) => {
    console.log('handlePageSize');
    
    setPage(newPageSize);
  }

  const contextValue = useMemo(
    () => ({
      page,
      setPage: handlePageSize,
    }),
    [page, setPage, handlePageSize]
  )

  // const [products, setProducts] = useState<Product[] | []>([]);

  // const getProducts = () => {
  //   const products = mocProducts;

  //   if (products) {
  //     setProducts(products);
      
  //     return;
  //   } 

  //   return [];
  // }



  return (
    <ProductsContext.Provider value={contextValue}>
      {children}
    </ProductsContext.Provider>
  )
}
import { useContext } from "react";
import { ContextProps, ProductsContext } from "./Context";

const useProducts = (): ContextProps => useContext<ContextProps>(ProductsContext);

export default useProducts;
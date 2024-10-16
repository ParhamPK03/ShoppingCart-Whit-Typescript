import { createContext, useEffect, useState } from "react";
import { Product } from "../Components/Products.types";

type CartContextProviderProps = {
  children: React.ReactNode;
};

type CartContextType = {
  UserCart: Product[];
  addProduct: (id: number) => void;
  removeProduct: (id: number) => void;
  removeAll: () => void;
  shop: Product[];
};

export const CartContext = createContext({} as CartContextType);

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [UserCart, setUserCart] = useState<Product[]>([]);
  const [shop, setShop] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setShop(data));
  }, []);

  const addProduct = (id: number) => {};

  const removeProduct = (id: number) => {};

  const removeAll = () => {};

  return (
    <CartContext.Provider
      value={{
        addProduct,
        removeProduct,
        removeAll,
        shop,
        UserCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

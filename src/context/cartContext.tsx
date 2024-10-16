import { createContext, useState } from "react";
import { Product } from "../Components/Products.types";

type CartContextProviderProps = {
    children: React.ReactNode
};

type CartContextType = {
    UserCart: Product[];
    addProduct: (id: number) => void,
    removeProduct: (id: number) => void,
    removeAll: () => void,
    shop: Product[];
};

export const CartContext = createContext({} as CartContextType)

const CartContextProvider = ({ children }: CartContextProviderProps) => {

    const [UserCart, setUserCart] = useState<Product[]>([])
    const [shop, setShop] = useState<Product[]>([])

    const addProduct = (id: number) => { }
    const removeProduct = (id: number) => { }
    const removeAll = () => { }

    return (
        <CartContextProvider value={{ addProduct, removeAll, removeProduct, shop, UserCart, }}>
            {children}
        </CartContextProvider>
    )
}
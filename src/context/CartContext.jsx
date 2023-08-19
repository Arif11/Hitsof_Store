import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/CartReducer";

export const CartContex = createContext();

const LocalData = () =>
{
    let LocalStorageData = localStorage.getItem("HitsofArif")
    // if(LocalStorageData == [])
    // {
    //     return [];
    // } else{
    //     return JSON.parse(LocalStorageData);
    // }

    let parseData = JSON.parse(LocalStorageData);
    if(!Array.isArray(parseData)) return [];
    return parseData;
}

const initialState = {
    cart: LocalData(),
    total_item: "",
    total_price: "",
    shipping_fee: 5000,
}



export const CartContexProvider = ({children}) =>
{
    const [state, dispatch] = useReducer(reducer, initialState)


   const addToCart = (id,color,amount, product) =>
   {
    dispatch({type:"ADD_TO_CART", payload:{id,color,amount, product}})
    // console.log(product);
   }

   const RemoveCart = (id) =>
   {
    dispatch({type:"REMOVE_CART_ITEM", payload:id})
   }

   const ClearCart = () =>
   {
    dispatch({type:"CLEAR_CART"})
   }

   useEffect(() => {
    dispatch({type:"CART_TOTAL_SUB_ITEMS"})
    // dispatch({type:"CART_SUBTOTAL"})
    // dispatch({type:"CART_TOTAL_ITEMS"})
    localStorage.setItem("HitsofArif", JSON.stringify(state.cart))
   }, [state.cart]);

       const setIncrease = (id) =>
    {

        dispatch({type:"SET_INCREMENT", payload:id})
        // console.log(id);
    }

    const setDecrise = (id) =>
    {
        dispatch({type:"SET_DECRIMENT", payload:id})
        // console.log(id);
    }

    return <CartContex.Provider value={{...state, addToCart, RemoveCart, ClearCart, setIncrease, setDecrise}}>{children}</CartContex.Provider>
}

export const useCartContext = () =>
{
    return useContext(CartContex);
}
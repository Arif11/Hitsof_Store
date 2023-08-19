import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from "../reducer/ProductReducer";


export const productContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialstate = {
    isLoading:false,
    isError:false,
    products:[],
    featureproducts:[],
    singleProduct:{},
    isSingleLoading:false,
}



export const ContextProvider = ({children}) =>
{

    const [state, dispatch] = useReducer(reducer, initialstate);

    const getApiData = async (url) =>
    {
        dispatch({type:"DATA_LOADING"});

        try{
            const res = await axios.get(url);
            const products = await res.data;
            dispatch({type:"GET_API_DATA", payload:products});
        } catch(error){
            dispatch({type:"DATA_ERROR"});
        }
            
    }

    const getSingleProduct = async (url) =>
    {
        dispatch({type:"SINGLE_LOADING"});
        try
        {
            const res = await axios.get(url);
            const singleData = await res.data;
            dispatch({type:"GET_SINGLE_PRODUCT", payload:singleData});
        } catch(error){
            dispatch({type:"SINGLE_ERROR"});
        }

    }

    useEffect(() => {
        getApiData(API);
    }, []);

    return <productContext.Provider value={{...state, getSingleProduct}}>{children}</productContext.Provider>
}


export const useGlobalContext = () =>
{
    return useContext(productContext);
}
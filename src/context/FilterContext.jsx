import { createContext, useContext, useEffect, useReducer } from "react";
import { useGlobalContext } from "./Usecontext";
import reducer from "../reducer/FilterReducer";

export const FilterContext = createContext();

const initialstate = {
    FilterProducts: [],
    AllProducts: [],
    Grid_View: true,
    Sort_value:"lowest",
    filters:{
        text:"",
        category:"All",
        company:"All",
        colors:"All",
        max_price:0,
        price:0,
        min_price:0,
    }
}

export const FilterContextProvider = ({children}) =>
{

    const [state, dispatch] = useReducer(reducer, initialstate)

    const {products} = useGlobalContext();

    useEffect(() => {
        dispatch({type:"SET_FILTER_PRODUCTS", payload:products});
    }, [products]);

    const setGridView = () =>
    {
        dispatch({type:"GRID_VIEW"})
    }

    const setListView = () =>
    {
        dispatch({type:"LIST_VIEW"})
    }

    const Sort = (event) =>
    {
        const sort_value = event.target.value;
        dispatch({type:"SET_SORT_VALUE", payload:sort_value});
    }

    useEffect(() => {
        dispatch({type:"FILTER_PRODUCTS"})
        dispatch({type:"SORTING_PRODUCTS"})
    }, [state.Sort_value,state.filters]);

    const UpdateFilterValue = (e) =>
    {
        let name = e.target.name;
        let value = e.target.value;
        dispatch({type:"UPDATE_FILTER_VALUE", payload:{name, value}})
        // console.log(name,value);
    }

    const ClearFilters = () =>
    {
        dispatch({type:"CLEAR_FILTERS"})
    }

    return <FilterContext.Provider value={{...state, setGridView, setListView, Sort, UpdateFilterValue, ClearFilters}}>{children}</FilterContext.Provider>
}

export const useFilterContext = () =>
{
    return useContext(FilterContext);
}
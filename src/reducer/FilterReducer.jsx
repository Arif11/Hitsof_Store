

const FilterReducer = (state, action) => {

    switch(action.type)
    {
        case "SET_FILTER_PRODUCTS":
            let priceArr = action.payload.map((curElem) => curElem.price);
            let maxPrice = Math.max(...priceArr);
            
            return {
                ...state,
                FilterProducts: [...action.payload],
                AllProducts: [...action.payload],
                filters:{
                    ...state.filters,
                    max_price:maxPrice,
                    price:maxPrice,
                }
            }

        case "GRID_VIEW":
            return {
                ...state,
                Grid_View: true,
            }

        case "LIST_VIEW":
        return {
            ...state,
            Grid_View: false,
        }

        case "SET_SORT_VALUE":
            // const userSortValue = document.getElementById("sort");
            // const SortValue = userSortValue.options[userSortValue.selectedIndex].value;
            return{
                ...state,
                Sort_value:action.payload,
            }

        case "SORTING_PRODUCTS":
            const {Sort_value, FilterProducts} = state;
            // let newSortProducts;
            let newTempProducts = [...FilterProducts];

            

            const sortData = (a,b) =>
            {
                switch(Sort_value){
                    case "lowest":
                        return a.price - b.price;
                    case "highest":
                        return b.price - a.price;
                    case "a-z":
                        return a.name.localeCompare(b.name);
                    case "z-a":
                        return b.name.localeCompare(a.name);
                }
                // if(Sort_value === "lowest")
                // {
                //     return a.price - b.price;
                // }

                // if(Sort_value === "highest")
                // {
                //     return b.price - a.price;
                // }

                // if(Sort_value === "a-z")
                // {
                //     return a.name.localeCompare(b.name);
                // }

                // if(Sort_value === "z-a")
                // {
                //     return b.name.localeCompare(a.name);
                // }
            }

            let newSortProducts = newTempProducts.sort(sortData);
            // if(state.Sort_value === "lowest")
            // {
            //     const sortData = (a,b) =>
            //     {
            //         return a.price - b.price;
            //     }
            //     newSortProducts = newTempProducts.sort(sortData)
            // }

            // if(state.Sort_value === "highest")
            // {
            //     const sortData = (a,b) =>
            //     {
            //         return b.price - a.price;
            //     }
            //     newSortProducts = newTempProducts.sort(sortData)
            // }

            // if(state.Sort_value === "a-z")
            // {
            //     newSortProducts = newTempProducts.sort((a,b) => 
            //          a.name.localeCompare(b.name)
            //     )
            // }

            // if(state.Sort_value === "z-a")
            // {
            //     newSortProducts = newTempProducts.sort((a,b) => 
            //          b.name.localeCompare(a.name)
            //     )
            // }

            return{
                ...state,
                FilterProducts: newSortProducts,
            }


            case "UPDATE_FILTER_VALUE":
                const {name, value} = action.payload;
                return {
                    ...state,
                    filters:{
                        ...state.filters,
                        [name]:value,
                    }
                }

            case "FILTER_PRODUCTS":
                let {filters:{text, category, company, colors, price},AllProducts} = state;
                let tempFilterProducts = [...AllProducts];

                if(text){
                    tempFilterProducts = tempFilterProducts.filter((curElem) => {
                        return curElem.name.includes(text);
                    })
                }

                if(category !== "All"){
                    tempFilterProducts = tempFilterProducts.filter((curElem) => {
                        return curElem.category === category;
                    }) 
                }

                if(company !== "All"){
                    tempFilterProducts = tempFilterProducts.filter((curElem) => {
                        return curElem.company === company;
                    })
                }

                if(colors !== "All"){
                    tempFilterProducts = tempFilterProducts.filter((curElem) => {
                        return curElem.colors.includes(colors);
                    })
                }

                if(price){
                    tempFilterProducts = tempFilterProducts.filter((curElem) => {
                        return curElem.price <= price;
                    })
                }


                return{
                    ...state,
                    FilterProducts:tempFilterProducts,
                }

              case "CLEAR_FILTERS":
                const {max_price} = state.filters;
                return{
                    ...state,
                    filters:{
                        ...state.filters,
                        text:"",
                        category:"All",
                        company:"All",
                        colors:"All",
                        max_price:max_price,
                        price:max_price,
                        min_price:0,
                    }
                }

        default:
            return state;
    }
}

export default FilterReducer
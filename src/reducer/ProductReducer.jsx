

const ProductReducer = (state, action) => {

    switch(action.type)
    {
        case "DATA_LOADING":
            return {
                ...state,
                isLoading:true,
            }
        
        case "DATA_ERROR":
            return {
                ...state,
                isLoading:false,
                isError:true,
            }

        case "GET_API_DATA":
            const featureData = action.payload.filter((curElem) => {return curElem.featured === true});
            return {
                ...state,
                isLoading:false,
                isError:false,
                products:action.payload,
                featureproducts:featureData,
            }

        case "SINGLE_LOADING":
            return {
                ...state,
                isSingleLoading:true,
            }

        case "GET_SINGLE_PRODUCT":
            return {
                ...state,
                isSingleLoading:false,
                singleProduct:action.payload,
            }
        
        case "SINGLE_ERROR":
        return {
            ...state,
            isSingleLoading:false,
            isError:true,
        }
        
        default:
            return state;
    }
}

export default ProductReducer
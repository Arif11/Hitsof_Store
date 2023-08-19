import React from 'react'

const CartReducer = (state, action) => {
    
    switch(action.type){
        case "ADD_TO_CART":
            const {id,color,amount, product} = action.payload;
            // console.log(product);

            let existingCartProduct = state.cart.find((curElem) => curElem.id === id + color);

            if(existingCartProduct)
            {
                let updateCartProduct = state.cart.map((curElem) => {
                    if(curElem.id === id + color)
                    {
                        let newAmount = curElem.amount + amount;
                        if(newAmount>=curElem.max)
                        {
                             newAmount = curElem.max;
                        }
                        return{
                            ...curElem,
                            amount:newAmount,
                        }
                    }else{
                        return curElem;
                    }
                }

                );

                return{
                    ...state,
                    cart:updateCartProduct,
                }

            } else{

            let CartProduct = {
                id:id+color,
                name: product.name,
                color,
                amount,
                image:product.image[0].url,
                price:product.price,
                max:product.stock,
            }


            return{
                ...state,
                cart: [...state.cart, CartProduct],
            }
        }

            case "REMOVE_CART_ITEM":
                 let RemoveCartProduct = state.cart.filter((curElem) => curElem.id !==action.payload);
            return{
                ...state,
                cart: RemoveCartProduct,
            }

            case "CLEAR_CART":
                return{
                    ...state,
                    cart:[],
                }

            case "SET_INCREMENT":
                let incCartAmount = state.cart.map((curElem) => {
                    if(curElem.id == action.payload)
                    {
                        let newAmount = curElem.amount + 1;

                        if(newAmount >= curElem.max)
                        {
                            newAmount = curElem.max;
                        }
                        return{
                            ...curElem,
                            amount: newAmount,
                        }
                    } else {
                        return curElem;
                    }
                }) 

                return{
                    ...state,
                    cart: incCartAmount,
                }

                case "SET_DECRIMENT":
                    let decCartAmount = state.cart.map((curElem) => {
                        if(curElem.id == action.payload)
                        {
                            let newAmount = curElem.amount - 1;
    
                            if(newAmount <= 1)
                            {
                                newAmount = 1;
                            }
                            return{
                                ...curElem,
                                amount: newAmount,
                            }
                        } else {
                            return curElem;
                        }
                    }) 
    
                    return{
                        ...state,
                        cart: decCartAmount,
                    }

                // case "CART_TOTAL_ITEMS":
                //     let newTotalItems = state.cart.reduce((initialvalue, curElem) => {
                //         let {amount} = curElem;
                //         return initialvalue + amount;
                //     }, 0)

                //     return{
                //         ...state,
                //         total_item: newTotalItems,
                //     }

                // case "CART_SUBTOTAL":
                //     let subTotal = state.cart.reduce((initialvalue, curElem) => {
                //         let {price, amount} = curElem
                //         return initialvalue + (price*amount);
                //     }, 0)

                //     return{
                //         ...state,
                //         total_price: subTotal,
                //     }

                case "CART_TOTAL_SUB_ITEMS":
                    let {total_item, total_price} = state.cart.reduce((initialvalue, curElem) => {
                        let {price, amount} = curElem
                        initialvalue.total_item += amount;
                        initialvalue.total_price += price*amount;
                        return initialvalue;
                    }, {total_item:0, total_price:0})

                    return{
                        ...state,
                        total_item,
                        total_price,
                    }

            default:
                return state;
    }
}

export default CartReducer
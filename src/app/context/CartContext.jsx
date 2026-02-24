"use client"
import { useReducer, createContext } from "react";
const ADD_TO_CART = 'ADD_TO_CART';
const INCREMENT_QUANTITY = 'INCREMENT_QUANTITY';
const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

const CartContext = createContext();

let CartReducer = (state, action) => {
  switch (action.type) {

    case ADD_TO_CART:
      const existingItemIndex = state.cart.findIndex(
        item => item.id === action.payload.id
      );
      console.log(existingItemIndex)
      if (existingItemIndex !== -1) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
          ),
        };
      } else {
        // If item doesn't exist, add it to the cart
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case INCREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
        ),
      };
    case DECREMENT_QUANTITY:
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload.id ? { ...item, quantity: item.quantity - 1 } : item
        ),
      };

  }
};
 const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, { cart: [] });

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };

//   let {state, dispatch}=useContext(CartContext)
//<CartProvider></CartProvider>

{/* <button onClick={() => dispatch({ type: 'ADD_TO_CART', payload: { id: 1, name: 'Product 1' } })}>
  Add Item
</button> */}
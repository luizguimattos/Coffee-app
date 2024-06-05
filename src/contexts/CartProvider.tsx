import { ReactNode, createContext, useReducer } from "react";
import { IOrder, IOrderItem } from "../domain/models/Order";
import { useNavigate } from "react-router-dom";
import { cartReducer } from "../reducers/cart/reducer";
import {
  addItemAction,
  checkoutCartAction,
  decrementItemQuantityAction,
  incrementItemQuantityAction,
  removeItemAction,
} from "../reducers/cart/actions";

interface CartContextType {
  cart: IOrderItem[];
  orders: IOrder[];
  addItem: (item: IOrderItem) => void;
  removeItem: (itemId: IOrderItem["id"]) => void;
  decrementItemQuantity: (itemId: IOrderItem["id"]) => void;
  incrementItemQuantity: (itemId: IOrderItem["id"]) => void;
  checkout: (order: IOrder) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        "@coffee-app:cart-state-1.0.0"
      );

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON);
      }

      return cartState;
    }
  );

  const navigate = useNavigate();
  const { cart, orders } = cartState;

  function addItem(item: IOrderItem) {
    dispatch(addItemAction(item));
  }

  function removeItem(itemId: IOrderItem["id"]) {
    dispatch(removeItemAction(itemId));
  }

  function checkout(order: IOrder) {
    dispatch(checkoutCartAction(order, navigate));
  }

  function incrementItemQuantity(itemId: IOrderItem["id"]) {
    dispatch(incrementItemQuantityAction(itemId));
  }

  function decrementItemQuantity(itemId: IOrderItem["id"]) {
    dispatch(decrementItemQuantityAction(itemId));
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        cart,
        orders,
        decrementItemQuantity,
        incrementItemQuantity,
        removeItem,
        checkout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

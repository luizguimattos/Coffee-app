import { NavigateFunction } from "react-router-dom";
import { IOrder, IOrderItem } from "../../domain/models/Order";
import { ICatalogItem } from "../../domain/models/CatalogItem";

export enum ActionTypes {
  ADD_ITEM = "ADD_ITEM",
  REMOVE_ITEM = "REMOVE_ITEM",
  INCREMENT_ITEM_QUANTITY = "INCREMENT_ITEM_QUANTITY",
  DECREMENT_ITEM_QUANTITY = "DECREMENT_ITEM_QUANTITY",
  CHECKOUT_CART = "CHECKOUT_CART",
}

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM;
      payload: {
        item: IOrderItem;
      };
    }
  | {
      type:
        | ActionTypes.DECREMENT_ITEM_QUANTITY
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.REMOVE_ITEM;
      payload: {
        itemId: IOrderItem["id"];
      };
    }
  | {
      type: ActionTypes.CHECKOUT_CART;
      payload: {
        order: IOrder;
        callback: NavigateFunction;
      };
    };

export function addItemAction(item: IOrderItem) {
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Actions;
}

export function removeItemAction(itemId: IOrderItem["id"]) {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies Actions;
}

export function incrementItemQuantityAction(itemId: IOrderItem["id"]) {
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions;
}

export function decrementItemQuantityAction(itemId: IOrderItem["id"]) {
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions;
}

export function checkoutCartAction(order: IOrder, callback: NavigateFunction) {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  } satisfies Actions;
}

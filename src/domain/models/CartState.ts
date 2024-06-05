import { IOrder, IOrderItem } from "./Order";

export interface CartState {
  cart: IOrderItem[];
  orders: IOrder[];
}

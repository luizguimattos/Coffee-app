export interface IOrder extends IOrderInfo {
  id: string;
  Items: IOrderItem[];
}

export interface IOrderItem {
  id: string;
  quantity: number;
}

export interface IOrderInfo {
  cep: number;
  street: string;
  number: number;
  fullAddress: string;
  neighborhood: string;
  city: string;
  state: string;
  paymentMethod: "credit" | "debit" | "cash";
}

export interface CartItem {
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartState {
  items: CartItem[];
}

export type CartAction =
  | { type: 'ADD_ITEM'; payload: { productId: string; name: string; price: number; image: string; quantity?: number } }
  | { type: 'REMOVE_ITEM'; payload: { productId: string } }
  | { type: 'SET_QUANTITY'; payload: { productId: string; quantity: number } }
  | { type: 'CLEAR_CART' };

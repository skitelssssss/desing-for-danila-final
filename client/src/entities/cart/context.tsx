import { createContext, useContext, useReducer, useEffect, useCallback, type ReactNode } from 'react';
import type { CartState, CartAction, CartItem } from './model';

const STORAGE_KEY = 'luxe_cart';

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existing = state.items.find(i => i.productId === action.payload.productId);
      if (existing) {
        return {
          items: state.items.map(i =>
            i.productId === action.payload.productId
              ? { ...i, quantity: i.quantity + (action.payload.quantity ?? 1) }
              : i,
          ),
        };
      }
      return {
        items: [...state.items, { ...action.payload, quantity: action.payload.quantity ?? 1 }],
      };
    }
    case 'REMOVE_ITEM':
      return { items: state.items.filter(i => i.productId !== action.payload.productId) };
    case 'SET_QUANTITY':
      if (action.payload.quantity <= 0) {
        return { items: state.items.filter(i => i.productId !== action.payload.productId) };
      }
      return {
        items: state.items.map(i =>
          i.productId === action.payload.productId ? { ...i, quantity: action.payload.quantity } : i,
        ),
      };
    case 'CLEAR_CART':
      return { items: [] };
    default:
      return state;
  }
}

function loadInitialState(): CartState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && Array.isArray(parsed.items)) return parsed as CartState;
    }
  } catch { /* ignore */ }
  return { items: [] };
}

interface CartContextValue {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  addToCart: (product: { id: string; name: string; price: number; image: string }, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, undefined, loadInitialState);

  useEffect(() => {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* noop */ }
  }, [state]);

  const totalItems = state.items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = state.items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  const addToCart = useCallback(
    (product: { id: string; name: string; price: number; image: string }, quantity = 1) => {
      dispatch({ type: 'ADD_ITEM', payload: { productId: product.id, name: product.name, price: product.price, image: product.image, quantity } });
    },
    [],
  );

  const removeFromCart = useCallback((productId: string) => {
    dispatch({ type: 'REMOVE_ITEM', payload: { productId } });
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    dispatch({ type: 'SET_QUANTITY', payload: { productId, quantity } });
  }, []);

  const clearCart = useCallback(() => {
    dispatch({ type: 'CLEAR_CART' });
  }, []);

  return (
    <CartContext.Provider value={{ items: state.items, totalItems, totalPrice, addToCart, removeFromCart, setQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within <CartProvider>');
  return ctx;
}

import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '../types/cart';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

function loadState(): CartState {
  if (typeof window === 'undefined') return initialState;
  try {
    const stored = localStorage.getItem('cart');
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (e) {
    console.error('Failed to load cart from localStorage', e);
  }
  return initialState;
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: loadState(),
  reducers: {
    addItem(state, action: PayloadAction<Omit<CartItem, 'quantity'>>) {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem(state, action: PayloadAction<number>) {
      state.items = state.items.filter((i) => i.id !== action.payload);
    },
    updateQuantity(
      state,
      action: PayloadAction<{ id: number; quantity: number }>
    ) {
      const item = state.items.find((i) => i.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, updateQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

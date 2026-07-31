import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

let persistTimeout: number | undefined;

// persist cart to localStorage in a non-blocking, debounced way
store.subscribe(() => {
  if (typeof window === 'undefined') return;

  window.clearTimeout(persistTimeout);
  persistTimeout = window.setTimeout(() => {
    try {
      const state = store.getState();
      localStorage.setItem('cart', JSON.stringify(state.cart));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
  }, 100);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

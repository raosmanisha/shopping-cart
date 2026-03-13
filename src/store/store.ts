import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// persist cart to localStorage whenever it changes
store.subscribe(() => {
  if (typeof window !== 'undefined') {
    try {
      const state = store.getState();
      localStorage.setItem('cart', JSON.stringify(state.cart));
    } catch (e) {
      console.error('Failed to save cart', e);
    }
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

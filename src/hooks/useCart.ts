"use client";

import { useCallback, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../store/store';
import { addItem, removeItem, updateQuantity } from '../store/cartSlice';
import { Product } from '../types/product';

export function useCart() {
  const dispatch = useAppDispatch();
  const items = useSelector((state: RootState) => state.cart.items);

  const addToCart = useCallback((product: Product) => {
    dispatch(addItem(product));
  }, [dispatch]);

  const removeFromCart = useCallback((id: number) => {
    dispatch(removeItem(id));
  }, [dispatch]);

  const updateItemQuantity = useCallback(
    (id: number, quantity: number) => {
      dispatch(updateQuantity({ id, quantity }));
    },
    [dispatch]
  );

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  return {
    items,
    addToCart,
    removeFromCart,
    updateItemQuantity,
    total,
  };
}

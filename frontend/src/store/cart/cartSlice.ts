import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ProductType} from "../../products";

export type CartItem = {
  product: ProductType;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const existItem = state.items.find(i => i.product._id === item.product._id);

      if (existItem) {
        state.items = state.items.map(i => {
          if (i.product._id === item.product._id) {
            return item;
          }
          return i;
        })
      } else {
        state.items.push(item);
      }
    },
  },
})

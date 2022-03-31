import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {ProductType} from "../../products";

export interface ProductState {
  products: ProductType[];
}

const initialState: ProductState = {
  products: []
}

export const counterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // increment: (state) => {
    //   // Redux Toolkit allows us to write "mutating" logic in reducers. It
    //   // doesn't actually mutate the state because it uses the Immer library,
    //   // which detects changes to a "draft state" and produces a brand new
    //   // immutable state based off those changes
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  shoppingCart: JSON.parse(localStorage.getItem('shoppingCart')) || {
    orderItems: [],
  },
}

export const ShoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    setShoppingCart: (state, action) => {
      state.shoppingCart = action.payload
      localStorage.setItem('shoppingCart', JSON.stringify(action.payload))
    },
  },
})

export const { setShoppingCart } = ShoppingCartSlice.actions

export const shoppingCartReducer = ShoppingCartSlice.reducer

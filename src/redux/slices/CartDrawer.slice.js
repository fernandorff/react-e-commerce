import { createSlice } from '@reduxjs/toolkit'

export const cartDrawerSlice = createSlice({
  name: 'cartDrawer',
  initialState: {
    open: false,
  },
  reducers: {
    openCartDrawer: (state) => {
      state.open = true
    },
    closeCartDrawer: (state) => {
      state.open = false
    },
    toggleCartDrawer: (state) => {
      state.open = !state.open
    },
  },
})

export const { openCartDrawer, closeCartDrawer, toggleCartDrawer } =
  cartDrawerSlice.actions
export const cartDrawerReducer = cartDrawerSlice.reducer

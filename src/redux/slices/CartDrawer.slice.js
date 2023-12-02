import { createSlice } from '@reduxjs/toolkit'

export const cartDrawerSlice = createSlice({
  name: 'cartDrawer',
  initialState: {
    openCartDrawer: false,
  },
  reducers: {
    openCartDrawer: (state) => {
      state.openCartDrawer = true
    },
    closeCartDrawer: (state) => {
      state.openCartDrawer = false
    },
    toggleCartDrawer: (state) => {
      state.openCartDrawer = !state.openCartDrawer
    },
  },
})

export const { openCartDrawer, closeCartDrawer, toggleCartDrawer } =
  cartDrawerSlice.actions
export const cartDrawerReducer = cartDrawerSlice.reducer

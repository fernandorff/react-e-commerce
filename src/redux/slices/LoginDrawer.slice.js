import { createSlice } from '@reduxjs/toolkit'

export const loginDrawerSlice = createSlice({
  name: 'loginDrawer',
  initialState: {
    open: false,
  },
  reducers: {
    openLoginDrawer: (state) => {
      state.open = true
    },
    closeLoginDrawer: (state) => {
      state.open = false
    },
    toggleLoginDrawer: (state) => {
      state.open = !state.open
    },
  },
})

export const { openLoginDrawer, closeLoginDrawer, toggleLoginDrawer } =
  loginDrawerSlice.actions
export const loginDrawerReducer = loginDrawerSlice.reducer

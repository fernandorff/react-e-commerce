import { createSlice } from '@reduxjs/toolkit'

export const loginDrawerSlice = createSlice({
  name: 'loginDrawer',
  initialState: {
    open: false,
  },
  reducers: {
    openDrawer: (state) => {
      state.open = true
    },
    closeDrawer: (state) => {
      state.open = false
    },
    toggleDrawer: (state) => {
      state.open = !state.open
    },
  },
})

export const { openDrawer, closeDrawer, toggleDrawer } =
  loginDrawerSlice.actions
export const loginDrawerReducer = loginDrawerSlice.reducer

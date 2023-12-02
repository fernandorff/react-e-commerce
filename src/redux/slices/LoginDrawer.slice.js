import { createSlice } from '@reduxjs/toolkit'

export const loginDrawerSlice = createSlice({
  name: 'loginDrawer',
  initialState: {
    openLoginDrawer: false,
    showLoginForm: true,
  },
  reducers: {
    openLoginDrawer: (state) => {
      state.openLoginDrawer = true
    },
    closeLoginDrawer: (state) => {
      state.openLoginDrawer = false
    },
    toggleLoginDrawer: (state) => {
      state.openLoginDrawer = !state.openLoginDrawer
    },
    toggleShowLoginForm: (state) => {
      state.showLoginForm = !state.showLoginForm
    },
  },
})

export const {
  openLoginDrawer,
  closeLoginDrawer,
  toggleLoginDrawer,
  toggleShowLoginForm,
} = loginDrawerSlice.actions
export const loginDrawerReducer = loginDrawerSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState: {
    isLoginDrawerOpen: false,
    isLoginFormShown: true,
    isUserProfileDrawerOpen: false,
    isCartDrawerOpen: false,
  },
  reducers: {
    openLoginDrawer: (state) => {
      state.isUserProfileDrawerOpen = false
      state.isLoginDrawerOpen = true
    },
    closeLoginDrawer: (state) => {
      state.isLoginDrawerOpen = false
    },
    toggleisLoginFormShown: (state) => {
      state.isLoginFormShown = !state.isLoginFormShown
    },
    isUserProfileDrawerOpen: (state) => {
      state.isLoginDrawerOpen = false
      state.isUserProfileDrawerOpen = true
    },
    closeUserProfileDrawer: (state) => {
      state.isUserProfileDrawerOpen = false
    },
    openCartDrawer: (state) => {
      state.isCartDrawerOpen = true
    },
    closeCartDrawer: (state) => {
      state.isCartDrawerOpen = false
    },
    toggleCartDrawer: (state) => {
      state.isCartDrawerOpen = !state.isCartDrawerOpen
    },
  },
})

export const {
  openLoginDrawer,
  closeLoginDrawer,
  toggleisLoginFormShown,
  isUserProfileDrawerOpen,
  closeUserProfileDrawer,
  openCartDrawer,
  closeCartDrawer,
  toggleCartDrawer,
} = drawerSlice.actions
export const drawerReducer = drawerSlice.reducer

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
}

export const LoggedUserSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
    logout: (state) => {
      state.user = null
      localStorage.removeItem('user')
    },
  },
})

export const { login, logout } = LoggedUserSlice.actions

export const loggedUserReducer = LoggedUserSlice.reducer

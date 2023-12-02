import { createSlice } from '@reduxjs/toolkit'

export const cartProductsSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { id, amount } = action.payload
      const existingProduct = state.products.find(
        (product) => product.id === id
      )

      if (existingProduct) {
        existingProduct.amount += amount
      } else {
        state.products.push({ id, amount })
      }
    },
    removeFromCart: (state, action) => {
      const { id } = action.payload
      state.products = state.products.filter((product) => product.id !== id)
    },
    updateAmount: (state, action) => {
      const { id, amount } = action.payload
      const existingProduct = state.products.find(
        (product) => product.id === id
      )

      if (existingProduct) {
        existingProduct.amount = amount
      }
    },
    clearCart: (state) => {
      state.products = []
    },
  },
})

export const { addToCart, removeFromCart, updateAmount, clearCart } =
  cartProductsSlice.actions
export const cartReducer = cartProductsSlice.reducer

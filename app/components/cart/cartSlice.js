import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  cartItem: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) =>{
      const index = state.cartItem.findIndex((item)=> item.id === action.payload.id)
      if(index != -1){
        state.cartItem[index].qun++
      }else{
        state.cartItem = [...state.cartItem, {...action.payload, qun:1}]
      }
    },removeCart: (state, action) =>{
      const filterCart = state.cartItem.filter((item)=> item.id !== action.payload.id)
      state.cartItem = filterCart
    },
    increment: (state, action) => {
      let index = state.cartItem.findIndex((item)=> item.id === item.payload.id)
      if(index !== 1){
        state.cartItem[index].qun+1
      }
    },
    decrement: (state, action) => {
      let index = state.cartItem.findIndex((item)=> item.id === item.payload.id)
      if(index !== -1 && state.cartItem[index].qun > 1){
        state.cartItem[index].qun-1
      }
    },
  },
})


export const { increment, decrement, incrementByAmount } = cartSlice.actions

export default cartSlice.reducer
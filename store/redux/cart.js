import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
      product: [],
      fashionData:[],
      fashionDataMore:[],
      standardDataMore:[],
      standardData:[],
      configData:[],
      configDataMore:[],
      simpleData:[],
      simpleDataMore:[]

    },
    reducers: {
      addFromCart: (state, action) => {
        state.product.push(action.payload);
      },
      removeFromCart: (state, action) => {
        const newData = state.product.filter((item) => item.id !== action.payload);
        state.product = newData; // Update the state with the filtered data
      },
      adddata : (state, action) => {
        if(action.payload.id === 'fashionData'){
          state.fashionData = action.payload.data
        }
        else if(action.payload.id === 'fashionDataMore'){
          state.fashionDataMore = action.payload.data
        }
      }
    }
  });
  
  export const addFromCart = cartSlice.actions.addFromCart;
  export const removeFromCart = cartSlice.actions.removeFromCart;
  
  export default cartSlice.reducer
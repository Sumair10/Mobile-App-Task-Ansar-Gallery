import { createSlice } from "@reduxjs/toolkit";

const appDataSlice = createSlice({
    name: 'appData',
    initialState: {
      fashionData:[],
      fashionDataMore:null,
      standardData:[],
      configData:[],
      configDataMore:null,
      simpleData:[],
      simpleDataMore:null
    },
    reducers: {
      adddata : (state, action) => {
        if(action.payload.id === 'fashionData'){
          state.fashionData = action.payload.data
        }
        else if(action.payload.id === 'fashionDataMore'){
          state.fashionDataMore = action.payload.data
        }
        else if(action.payload.id === 'standardData'){
          state.standardData = action.payload.data
        }
        else if(action.payload.id === 'configData'){
          state.configData = action.payload.data
        }
        else if(action.payload.id === 'configDataMore'){
          state.configDataMore = action.payload.data
        }
        else if(action.payload.id === 'simpleData'){
          state.simpleData = action.payload.data
        }
        else if(action.payload.id === 'simpleDataMore'){
          state.simpleDataMore = action.payload.data
        }
      }
    }
  });
  
  export const adddata = appDataSlice.actions.adddata;
  
  export default appDataSlice.reducer
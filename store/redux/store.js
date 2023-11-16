import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cart'
import appDataReducer from './appData'

export const store =configureStore({
    reducer : {
        cart: cartReducer,
        appData:appDataReducer
    }
})
import { configureStore } from '@reduxjs/toolkit'
import productReducer from "./TodoSlice.js";
import priceReducer from "./PriceSlice.js";

export default configureStore({
    reducer: {
        product: productReducer,
        price: priceReducer,
    }
})
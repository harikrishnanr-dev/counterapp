import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
//configue method to initialize this file as store
export const store = configureStore({
    reducer: {
        //to add reducers
        counter:counterSlice
}
})
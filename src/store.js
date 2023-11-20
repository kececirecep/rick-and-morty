import { configureStore } from "@reduxjs/toolkit";
import charSlice from "./redux/charSlice";

export const store = configureStore({
    reducer:{
        rick: charSlice
    }
})
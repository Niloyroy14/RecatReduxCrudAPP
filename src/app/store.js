import { configureStore } from "@reduxjs/toolkit";
import BooksReducer from "../features/books/BooksSlice";

const store = configureStore({
     reducer:{
          BooksReducer: BooksReducer,
     }
});

export default store;
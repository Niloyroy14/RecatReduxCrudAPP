import { createSlice } from "@reduxjs/toolkit";

const initialBooks = {
    books:[
        {id:1,title:"Himur Moddhyo Dupur",author:"Humayon Ahmed"},
        {id:2,title:"Noboni",author:"Humayon Ahmed"},
        {id:3,title:"Himur Neel Jochona",author:"Humayon Ahmed"},
    ]
};


 export const booksSlice =createSlice({
    name:"books",
    initialState: initialBooks,
    reducers: {
        showBooks:(state) =>state,
        addBook:(state,action)=>{
            state.books.push(action.payload);
        },
        updateBook:(state,action)=>{
            const {id,title,author} = action.payload;
            const isBookExist =  state.books = state.books.filter(book=>book.id===id);
            if(isBookExist){
                isBookExist[0].title = title;
                isBookExist[0].author = author;
            }
        },
        deleteBook:(state,action)=>{
            const id = action.payload;
            state.books = state.books.filter(book=>book.id!==id);
        }
    }
});


export const {showBooks,addBook,updateBook,deleteBook} = booksSlice.actions;


export default booksSlice.reducer;
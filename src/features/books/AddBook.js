import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux';
import { addBook } from './BooksSlice';
import { useNavigate } from 'react-router-dom';

export default function AddBook() {

  const [title,setTitle]= useState("");
  const [author,setAuthor]= useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const noOfBooks = useSelector((state) => state.BooksReducer.books.length);

  const handleSubmit = (e)=>{
     e.preventDefault();
     const book = {id:noOfBooks+1,title,author};
     dispatch(addBook(book));
     navigate("/show-books",{replace:true});
  }
 
  return (
    <div>
         <h2>AddBook</h2>
         <form onSubmit={handleSubmit}>
            <div className='form-field'>
              <lable htmlFor="title">Title:</lable>
              <input type="text" id="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required />
            </div>
            <div className='form-field'>
              <lable htmlFor="author">Author:</lable>
              <input type="text" id="author" name="author" value={author} onChange={(e)=>setAuthor(e.target.value)} required />
            </div>
            <button type='submit'>Add Book</button>
         </form>
    </div>
  )
}

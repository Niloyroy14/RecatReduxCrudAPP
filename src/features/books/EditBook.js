import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateBook } from './BooksSlice';

export default function EditBook() {
 
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
 // console.log(location);
  
  const [id,setId] =  useState(location.state.id);
  const [title,setTitle] =  useState(location.state.title);
  const [author,setAuthor] = useState(location.state.author);
 
  const handleUpdate = (e) =>{
    e.preventDefault();
    dispatch(updateBook({id,title,author}));
    navigate("/show-books",{replace:true});
  }


  return (
    <div>
        <h2>EditBook</h2>
        <form onSubmit={handleUpdate}>
            <div className='form-field'>
              <lable htmlFor="title">Title:</lable>
              <input type="text" id="title" name="title" value={title} onChange={(e)=>setTitle(e.target.value)} required />
            </div>
            <div className='form-field'>
              <lable htmlFor="author">Author:</lable>
              <input type="text" id="author" name="author" value={author} onChange={(e)=>setAuthor(e.target.value)} required />
            </div>
            <button type='submit'>Update Book</button>
         </form>
    </div>
  )
}

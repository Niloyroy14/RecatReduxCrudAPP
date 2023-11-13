import React from 'react';
import { Route, Routes,BrowserRouter } from "react-router-dom";
import Home from '../pages/Home';
import Error from '../pages/Error';
import NavBar from '../layouts/NavBar';
import BookList from '../features/books/BookList';
import AddBook from '../features/books/AddBook';
import EditBook from '../features/books/EditBook';
import TableData from '../reactTable/TableData';

export default function Index() {
  return (
    <BrowserRouter>
         <NavBar/>
         <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/table" element={<TableData />} />
                <Route path="/add-book" element={<AddBook />} />
                <Route path="/show-books" element={<BookList />} />
                <Route path="/edit-book" element={<EditBook />} />
                <Route path="/" element={<Error />} />
            </Routes>
         </main>
        </BrowserRouter>
  );
}

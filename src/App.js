import React from 'react';
import './App.css';
import BookContextProvider from './contexts/BookContext';
import Navbar from './components/Navbar';
import BookList from './components/BookList';
import NewBookForm from './components/BookForm';

function App() {
  return (
    <BookContextProvider>
      <Navbar />
      <BookList />
      <NewBookForm />
    </BookContextProvider>
  );
}

export default App;

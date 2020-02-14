import React, { createContext, /*useState */ useReducer, useEffect } from 'react';

import { bookReducer } from '../reducer/BookReducer';
export const BookContext = createContext();

const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer, [
    ], () => {
        return [];
        //preiau din baza de date
    })
    useEffect(() => {
        //fac modificari in baza de date
        console.log(books);
    }, [books])


    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;

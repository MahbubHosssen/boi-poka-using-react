import React, { useEffect, useState } from 'react';
import Book from '../Book/Book';
import data from "../../../public/booksData.json"
const Books = () => {
    const [books, setBooks] = useState([])

    

    useEffect(() => {
        fetch("/booksData.json")
        .then(res => res.json())
        .then(data => setBooks(data))
    }, [])
    // console.log(books)
    return (
        <div>
           <h1 className='text-4xl font-bold text-center my-6'>Books</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    books.map(book => <Book key={book.bookId} book={book}></Book>)
                }
            </div>
        </div>
    );
};

export default Books;<h1>Books</h1>
import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allBooks, setAllBooks] = useState([]);
    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res=>res.json())
    //     .then(data => {
    //     setAllBooks(data);
    //     })
    // })
    // const bookPromise = fetch('booksData.json').then(res=>res.json());

    return (
        <div>
            <h2 className='text-3xl font-bold text-center p-6' > Books</h2>
            <div  className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 justify-items-center'>
            <Suspense fallback={<span className="loading loading-dots loading-xl text-center"></span> }>
            {
                data.map((book)=> <Book key={book.bookId} book={book}></Book>)
            }
            </Suspense>
            </div>
            
        </div>
    );
};

export default Books;
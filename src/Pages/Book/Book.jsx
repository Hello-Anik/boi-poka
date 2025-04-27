import React, { use } from 'react';
import { IoStar } from 'react-icons/io5';
import { Link } from 'react-router';



const Book = ({book}) => {


    const {bookName, author, publisher, review, image, rating, category, tags, yearOfPublishing,bookId} = book;
    // const data = use(bookPromise);
    // console.log(data);
    console.log(book)
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100  w-96 shadow-sm border p-6 shadow">
  <figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
    <img
      src={image} className='h-[166px] rotate-15'
      alt="Shoes" />
  </figure>
  <div className="card-body">
   <div className='flex gap-2 justify-center'>
   {
      tags.map((tag)=> <button className='btn text-green-400'>{tag}</button>)
    }
   </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>Book by : {publisher}</p>
    <div className='border-2 border-green-500 border-dashed'></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating} <IoStar></IoStar></div>
    </div>
  </div>
</div>
            
        </Link>
    );
};

export default Book;
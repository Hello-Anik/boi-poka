import React, { use } from 'react';
import { IoStar } from 'react-icons/io5';



const Book = ({book}) => {


    const {bookName, author, review, image, rating, category} = book;
    // const data = use(bookPromise);
    // console.log(data);
    console.log(book)
    return (
        <div>
            <div className="card bg-base-100  w-96 shadow-sm border p-6">
  <figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
    <img
      src={image} className='h-[166px]'
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating} <IoStar></IoStar></div>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default Book;
import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../assets/Utilities/addToDB';


const BookDetails = () => {
    const {id} = useParams();
    const bookId = parseInt(id);
    console.log(id)
    const data = useLoaderData();
   const singleData = data.find(book=> book.bookId === bookId);
   console.log(singleData)
   const {bookName , image, author, review} = singleData || {};
   const handleMarkAsRead = id => {
    //store with id
    //where to store
    /**
     * array or collection
     * if the book already exist then show a alert 
     * then if book already not exist the push the collection or array
     * 
     */

    addToStoredDB(id);
   }
  
    return (
        <div className='w-2/3 mx auto'>
            <img src={image} className='w-48' alt="" />
            <h5>{bookName}</h5>
            <div className='flex gap-6'>
            <button className="btn btn-accent" onClick={()=>handleMarkAsRead(id)}>Mark as Read</button>
            <button className="btn btn-info">Add To Wishlist</button>
            </div>
        </div>
    );
};

export default BookDetails;
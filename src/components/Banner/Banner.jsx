import React from 'react';
import bookImg from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div>
            <div className=" bg-base-200 min-h-[500px]">
  <div className="flex items-center justify-evenly gap-10 flex-col lg:flex-row-reverse pt-20">
    <img
      src={bookImg}
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h1 className="text-5xl font-bold">Books to freshen up <br />your bookshelf</h1>
    
      <button className="btn btn-primary bg-[#23BE0A] mt-4">View The List</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Banner;
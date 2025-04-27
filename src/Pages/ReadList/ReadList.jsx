import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../assets/Utilities/addToDB';
import Book from '../Book/Book';


const ReadList = () => {

    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState('');
    const data = useLoaderData();
    console.log(data)
    useEffect(()=>{
        const storedBookData = getStoredBook();
        console.log(storedBookData);
        const convertedBook = storedBookData.map(id=>parseInt(id));
        console.log(convertedBook)
        const myReadList = data.filter(book=>convertedBook.includes(book.bookId));
        setReadList(myReadList);
    },[]);
    const handleSort = type => {
        setSort(type);

        if(type === 'pages'){
            const sortedByPage = [...readList].sort((a,b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
        }
        if(type === 'rating'){
            const sortedByRating = [...readList].sort((a,b)=> a.rating - b.rating);
            setReadList(sortedByRating);
        }

    }
    return (
        <div>
            <details className="dropdown text-center">
  <summary className="btn m-1">Short By {sort? sort : ""}</summary>
  <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
    <li><a onClick={()=>handleSort("pages")}>pages</a></li>
    <li><a onClick={()=>handleSort("rating")}>Rating</a></li>
  </ul>
</details> 
            <Tabs>
    <TabList>
      <Tab>Read Book List</Tab>
      <Tab> My WishList</Tab>
    </TabList>

    <TabPanel>
      <h2>My ReadList : {readList.length}</h2>
     <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-6 justify-items-center'>
     {
        readList.map(book=> <Book key={book.bookId} book={book}></Book>)
      }
     </div>
    </TabPanel>
    <TabPanel>
      <h2>My wishList</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default ReadList;
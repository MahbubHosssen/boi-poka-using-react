import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { getStoredList } from '../utility/utility';
import Book from '../Book/Book';

function PagesToRead(props) {
    const loadData = useLoaderData()
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState('')

    useEffect(() => {
        const getStored = getStoredList()
        const getStoreParInt = getStored.map(num => parseInt(num))

        const readBookListId = loadData.filter(data => getStoreParInt.includes(data.bookId))
        setReadList(readBookListId)
    }, [])

    // console.log(readBookListId)
    
    const handleSort = (btnName) => {
        setSort(btnName)
        if (btnName === "Rating") {
            const sorted = [...readList].sort((a, b) => a.rating - b.rating)
            setReadList(sorted)
        }if( btnName === 'No of Pages'){
            const sorted = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReadList(sorted)
        }
    }
    console.log(sort)

    return (
        <div className=''>
            <h1 className='text-3xl'>Read Book List : {readList.length}</h1>
            <div role="tablist" className="tabs tabs-lifted">
                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 1" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    <details className="dropdown">
                        <summary className="btn m-1">{sort ? `${sort}`: "Sort By"}</summary>
                        <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li onClick={() => handleSort("Rating")}><a>Rating</a></li>
                            <li onClick={() => handleSort("No of Pages")}><a>No of Pages</a></li>
                        </ul>
                    </details>
                    <div className='grid grid-cols-3 gap-6 my-6'>
                        {
                            readList.map(book => <Book key={book.bookId} book={book}></Book>)
                        }
                    </div>
                </div>

                <input
                    type="radio"
                    name="my_tabs_2"
                    role="tab"
                    className="tab"
                    aria-label="Tab 2"
                    defaultChecked />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    Tab content 2
                </div>

                <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Tab 3" />
                <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">
                    Tab content 3
                </div>
            </div>

        </div>
    );
}

export default PagesToRead;
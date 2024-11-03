import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { setValue } from '../utility/utility';

function BookDetail() {
    const fetchData = useLoaderData()
    const {bookId} = useParams()
    
    const book = fetchData.find(data => data.bookId === parseInt(bookId))
    const {image,bookName, author, category, review, publisher, tags, yearOfPublishing, totalPages, rating} = book;

    const handleMarkAsRead = (id) => {
        setValue(id)
    } 

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='bg-gray-300 py-16 rounded-xl'>
                <img className='max-h-[550px] mx-auto rounded-xl' src={image} alt="" />
            </div>
            <div className=''>
                <div>
                    <h1 className='text-3xl'>{bookName}</h1>
                    <p className='text-gray-700 font-medium'>By: {author}</p>
                </div>
                <div className="divider"></div>
                <div>
                    <h3 className='font-semibold text-xl border-b pb-4'>{category}</h3>
                    <p className='text-gray-500 py-4'><span className='font-medium text-black'>Review:</span> {review}</p>
                    <div className='flex gap-8 font-medium pb-4'>
                        <h4>Tag</h4>
                        {
                            tags.map((tag, idx) => <h4 key={idx} className='text-green-500'>#{tag}</h4> )
                        }
                    </div>
                </div>
                <div className='border-t py-4 space-y-2'>
                    <div className='flex gap-8'>
                        <p>Number of Pages:</p>
                        <h4>{totalPages}</h4>
                    </div>
                    <div className='flex gap-12'>
                        <p>Publisher: </p>
                        <h4>{publisher}</h4>
                    </div>
                    <div className='flex gap-8'>
                        <p>Year of publishing: </p>
                        <h4>{yearOfPublishing}</h4>
                    </div>
                    <div className='flex gap-8'>
                        <p>Rating: </p>
                        <h4>{rating}</h4>
                    </div>
                    
                </div>
                <div>
                    <button onClick={() => handleMarkAsRead(bookId)} className='btn btn-outline mr-3 mt-2 btn-accent'>Mark As Read</button>
                    <button className='btn btn-accent'>Wish List</button>
                </div>
            </div>
        </div>
    );
}

export default BookDetail;
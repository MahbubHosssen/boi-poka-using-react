import React from 'react';
import { Link, useParams } from 'react-router-dom';

function Book({ book }) {


    const { bookId, bookName, author, image, tags } = book;
    return (
        <Link to={`/books/${bookId}`}>
            <div className="card bg-base-100 shadow-xl border">
                <figure className='p-6 bg-gray-300 m-6 mb-0 rounded-lg'>
                    <img
                        className='rounded-lg h-36'
                        src={image}
                        alt="Shoes" />
                </figure>

                <div className="card-body font-medium">
                    <div className='flex justify-between'>
                        {
                            tags.map(tag => <p className='text-green-400'>{tag}</p>)
                        }
                    </div>
                    <h2 className="card-title mt-4">
                        {bookName}
                    </h2>
                    <p>By: {author}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline">Fiction</div>
                        <div className="badge">
                            <div className="rating">
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" defaultChecked />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                                <input type="radio" name="rating-1" className="mask mask-star" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default Book;
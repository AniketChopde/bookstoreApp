import React from 'react'

function Card ({item}) {
    return (
        <div className='p-3'>
            <div className="mt-10 card w-93 shadow-xl bg-white hover:scale-105 dark:bg-slate-900 dark:text-white dark:border">
                <figure>
                    <img
                        src={item.img}
                        alt="book" />
                </figure>
                <div className="card-body bg-white text-black dark:bg-slate-900 dark:text-white">
                    <h2 className="card-title">
                        {item.name}
                        <div className="badge badge-secondary">{item.category}</div>
                    </h2>
                    <p>{item.title}</p>
                    <div className="card-actions justify-between">
                        <div className="badge badge-outline font-bold py-3 px-2 ">${item.price}</div>
                        <div className="badge bg-white text-black hover:bg-pink-500 font-bold py-3 px-2 duration-100 cursor-pointer dark:bg-slate-900 dark:text-white dark:hover:bg-pink-500">Buy Now </div>
                    </div>
                  
                </div>
            </div>
        </div>
    )
}

export default Card

import React from 'react'
import list from '../../public/list.json'
import Card from './Card'
// import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Course = () => {
    const [Book, setBook] = useState([])
    useEffect(() => {
      const getBook = async()=>{
        try {
            const res = await axios.get("http://localhost:4001/book")
            console.log(res.data)
            setBook(res.data)
        } catch (error) {
            console.log(error)
        }
      }
      getBook();   
    }, [])
    
  return (
   <>
        <div className='bg-white text-black container mx-auto max-w-screen-2xl md:px-20 gap-x-20 py-1 md:py-1 dark:bg-slate-900 dark:text-white'>
            <div className='mt-8 text-center items-center justify-center'>
                <h1 className='text-2xl font-semibold md:text-4xl'>We're delighted to hava you <span className='text-pink-500'>Here!:)</span> </h1>
                <p className='mt-8 font-normal'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam quis voluptate nobis vel iste accusantium labore similique distinctio consectetur! Sunt molestiae doloribus quae laborum a odio beatae. Ab rem aliquam itaque ex reiciendis alias, esse dignissimos error consequatur mollitia aut fugit maxime quidem repudiandae placeat.</p>
                <Link to='/'>
                <button className='bg-pink-500 px-5 py-1 rounded-md font-medium text-white hover:bg-pink-600 duration-300 mt-5' >Back</button>

                </Link>
            </div>
            <div className='mt-5 md:mt-10 grid grid-cols-1 md:grid-cols-4'>
                {Book.map((item)=>(
                    <Card key={item.id} item={item} />
                ))}
            </div>

        </div>
   </>
  )
}

export default Course

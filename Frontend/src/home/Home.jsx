import React from 'react'
import Navbar from '../components/Navbar'
import Middle from '../components/Middle'
import Book from '../components/Book'
import Footer from '../components/Footer'

function Home() {
  return (
    <div className='bg-white h-full w-full dark:bg-slate-900 dark:text-white'>
        <Navbar/>
      <Middle/>
      <Book/>
      <Footer/>
    </div>
  )
}

export default Home

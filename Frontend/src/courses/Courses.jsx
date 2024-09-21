import React from 'react'
import Course from '../components/Course'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Courses = () => {
  return (
    <>
    <div className='bg-white dark:bg-slate-900 dark:text-white'>
        <Navbar/>
        <div className='min-h-screen dark:bg-slate-900 dark:text-white'><Course/></div>
        <Footer/>
    </div>
    </>
  )
}

export default Courses

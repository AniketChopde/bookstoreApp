import React from 'react'
import book from '../../public/book.jpg'

const middle = () => {
  return (
    <>
      <div className='flex-col md:flex-row max-w-screen-2xl container mx-auto  flex md:px-20  px-5 gap-x-20 dark:bg-slate-900 dark:text-white' >
        <div className="left text-black  md:my-10 md:w-1/2 py-10 md:py-0 md:order-1 order-2">
          <h1 className='font-bold text-4xl dark:bg-slate-900 dark:text-white'>Hello, welcomes here to learn something</h1><span className='flex font-bold text-4xl text-pink-500'>new everyday!!!</span>
          <p className='text-xl py-8 dark:bg-slate-900 dark:text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam harum sunt enim quibusdam aliquid magnam modi ea eos magni, temporibus minima neque doloremque illum! Magni!</p>
          <label className="input input-bordered flex items-center gap-2 bg-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="bg-white"
              className="h-4 w-4 opacity-70">
              <path
                d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
                d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <div className='py-8'>
          <button className="btn btn-secondary  ">Secondary</button>

          </div>

        </div>
        <div className="right  md:w-1/2 my-10 md:my-10 py-10 md:py-4 md:order-2 order-1 ">
          <img src={book} className='w-80 dark:bg-slate-900 ' alt="" />
        </div>
      </div>
    </>

  )
}

export default middle

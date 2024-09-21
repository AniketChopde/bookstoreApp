import React, { useEffect, useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import list from '../../public/list.json'
import Slider from "react-slick";
import Card from './Card';
import axios from "axios";



const Book = () => {
    const [Book, setBook] = useState([])
    useEffect(() => {
      const getBook = async()=>{
        try {
            const res = await axios.get("http://localhost:4001/book")
          
            const data = res.data.filter((data)=> data.category ==="FREE")
            setBook(data)
        } catch (error) {
            console.log(error)
        }
      }
      getBook( )
    }, [])
    
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    return (
        <>
            <div className=' container mx-auto max-w-screen-2xl px-5 md:px-20 gap-x-20 py-1 md:py-1'>
                <div className='text-black'>
                    <h1 className='text-lg font-semibold dark:bg-slate-900 dark:text-white'>Free Offered Courses</h1>
                    <p className='dark:bg-slate-900 dark:text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam veniam deleniti natus, dolorem esse Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius aliquam veniam deleniti natus, dolorem esse!</p>
                </div>
                <div className='  dark:bg-slate-900 dark:text-white  '>
                    <Slider {...settings}>
                        {Book.map((item)=>(
                            <Card key={item.id} item={item} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    )
}

export default Book

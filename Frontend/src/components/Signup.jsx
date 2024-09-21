import React from 'react'
import Login from './Login'
import { Form, useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState:{errors},
  } = useForm()
  const onSubmit=async (data)=>{
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password
    }
    await axios.post("http://localhost:4001/user/signup",userInfo)
    .then((res)=>{
      console.log(res.data)
      if(res.data){
        toast.success("login Successfully")
      }
      localStorage.setItem("Users", JSON.stringify(res.data.user))

    }).catch((err)=>{
      if(err.response){
        console.log(err)
        toast.error("error:"+err.response.data.message)
      }
    })

  }
  return (
    <div className='flex h-screen justify-center items-center bg-white'>
      <div id="" className="bg-white border shadow-md ">
        <div className=" bg-white text-black p-5  ">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none" onClick={()=>document.getElementById("my_module_3").close()}>
                            ✕
                        </Link>


            <h3 className="font-bold text-xl ">Signup</h3>
            <div className='mt-3 '>
              <p>Name</p>
              <input type="fullname" className='bg-white outline-none border mx-3 mt-2 px-2 w-fit' placeholder='Enter Your Name' 
              {...register("fullname",{required:true})}/>
              {errors.fullname && <span className='text-red-500 mt-1'>*This Is Required Field</span>}
              <p>Email</p>
              <input type="mail" className='bg-white outline-none border mx-3 mt-2 px-2 w-fit' placeholder='Enter Your Email' 
              {...register("email",{required:true})}/>
              <br />
              {errors.email && <span className='text-red-500 mt-1'>*This Is Required Field</span>}
              <p>Password</p>
              <input type="password" className='bg-white outline-none border mx-3 mt-2 px-2 w-fit' placeholder='Enter Your Password'
              {...register("password",{required:true})} />
              <br />
              {errors.password && <span className='text-red-500 mt-1'>*This Is Required Field</span>}
            </div>
            <div className='gap-x-7 flex mx-10 my-5 mb-0'>
              <button className='bg-pink-500 px-3 py-1 text-white rounded-lg hover:bg-pink-700 duration-700'>Signup</button>
              <span className='justify-center text-center'>Have account? <span onClick={() => document.getElementById("my_modal_3").showModal()} className='underline text-blue-500 cursor-pointer'>Login</span>
                <Login />
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup

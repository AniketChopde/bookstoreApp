import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password
        }
        await axios.post("http://localhost:4001/user/login", userInfo)
            .then((res) => {
                console.log(res.data)
                if (res.data) {
                    toast.success("login Successfully")
                    // document.getElementById("log").close()
                    // window.location.reload()
                }
                localStorage.setItem("Users", JSON.stringify(res.data.user))

            }).catch((err) => {
                if (err.response) {
                    console.log(err)
                    toast.error("error:" + err.response.data.message)
                }
            })
    }

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-white text-black  w-25 ">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 outline-none" onClick={()=>document.getElementById("my_module_3").close()}>
                            ✕
                        </Link>
                        <h3 className="font-bold text-xl ">Login</h3>
                        <div className='mt-3 '>
                            <p>Email</p>
                            <input type="mail" className='bg-white outline-none border mx-3 mt-2 px-2 w-1/2 ' placeholder='Enter Your Email'
                                {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className='text-red-500 mt-1'> *This Field Is Required</span>}
                        </div>
                        <div className='mt-3 '>
                            <p>Password</p>
                            <input type="password" className='bg-white outline-none border mx-3 mt-2 px-2 w-1/2' placeholder='Enter Your Password'
                                {...register("password", { required: true })} />
                            <br />
                            {errors.password && <span className='text-red-500 mt-1'>*This Field Is Required</span>}
                        </div>
                        <div className=' justify-between  flex mx-10 my-3 mb-0'>
                            <button className='bg-pink-500 px-3 py-1 text-white rounded-lg hover:bg-pink-700 duration-700'id='log' >Login</button>
                            <span className='justify-center text-center'>Not registered? <Link to='/signup'>
                                <span className='underline text-blue-500 cursor-pointer'>Signup</span>
                            </Link></span>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login

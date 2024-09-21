import { useState } from 'react'
import Courses from './courses/Courses'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Navigate, Route,Routes } from 'react-router-dom'
import Signup from './components/Signup'
import {Toaster} from 'react-hot-toast'

import Home from './home/Home'
import { useAuth } from './context/Authprovider'

function App() {
  const [authUser, setauthUser] = useAuth()
  console.log(authUser)
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white '>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/courses' element ={ authUser ? <Courses/> : <Navigate to = "/signup"/>}/>
        <Route path='/signup' element ={<Signup/>}/>
      </Routes>
      <Toaster/>

    </div>
    </>
  )
}

export default App

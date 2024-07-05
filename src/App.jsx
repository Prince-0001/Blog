import React,{ useState ,useEffect} from 'react'
import {useDispatch} from 'react-redux'
import authService from './appwrite/Auth'
import { login,logout } from './store/authSlice'
import './App.css'
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {

  const [loading,setLoading]=useState(true)
  const dispatch=useDispatch()

  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
      if(userData){
        dispatch(login({userData}))
      }else{
        console.log("nothing get")
        dispatch(logout())
      }
    })
    .finally(()=>setLoading(false))
  },[])
  return !loading ?(
    <div className='min-h-screen flex flex-wrap content-between w-full bg-gray-400'>
      <div className='w-full block'>
        <Header/>
        <main>
          <Outlet></Outlet>
        </main>
        <Footer></Footer>
      </div>

    </div>
  ):(<><h1 className='min-h-screen flex flex-wrap content-between bg-gray-400'>Loading...</h1></>)
}

export default App

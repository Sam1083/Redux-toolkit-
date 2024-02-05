import React,{useEffect,useState} from 'react'
import { jwtDecode } from "jwt-decode";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [userData,setUserData]=useState(null)
  const token=localStorage.getItem("token")
  const navigate=useNavigate();
  const decoded = jwtDecode(token);
const fetchUser=async()=>{
const response=await axios.get(`http://localhost:5000/api/userData/${decoded._id}`)
setUserData(response.data.user)
}
// const logout=()=>{
//   localStorage.removeItem("token")
//   navigate("/login")
// }

  useEffect(()=>{
    fetchUser();
  },[])
  
  return (
    <div className='ms-5'> 
      <h1>{userData?.name}</h1>
      <p>{userData?.email}</p>
      <p>{userData?.phone}</p>
      {/* <button onClick={()=>logout()} className='nr'>Logout</button> */}
    </div>
  )
}

export default Dashboard



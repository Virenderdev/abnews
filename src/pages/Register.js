import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import AuthContext from "../context/AuthContext"
import "./Register.css"
import CustomNavbar from '../components/NavBar/NavBar'
import Footer from '../components/Footer/Footer'

const Register = () => {
  // const [profile_picture, setProfile_picture] = useState(null)
  const [full_name, setFull_name] = useState("")
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")

  const {registerUser} = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault()
    
  // const formData = new FormData();
  

  const full_name = e.target.full_name.value
  const email = e.target.email.value
  const username = e.target.username.value
  const password = e.target.password.value
  const password2 = e.target.password2.value

  registerUser(full_name, email, username, password, password2);
  }

  return (
    <>
       
    <CustomNavbar />
     <div className='Register-container'>
    <form className="form-register" onSubmit={handleSubmit} encType="multipart/form-data">
      <h2 className='title'>Create a new account</h2>
      {/* <p>Create a new account</p> */}
      
      
        {/* <input 
          type="file" 
          name="profile_picture"
          onChange={(e) => setProfile_picture(e.target.files[0])}
          required  /> */}
        
        <input 
          type="text" 
          name="full_name"
          onChange={(e)=>setFull_name(e.target.value)}
          required placeholder='Full Name' />

      
        <input 
          type="email" 
          name="email"
          onChange={(e)=>setEmail(e.target.value)}
          required  placeholder='Enter Your Email'/>

       
        <input 
          type="text" 
          name="username"
          onChange={(e)=>setUsername(e.target.value)}
          required placeholder='Enter username' />

       
        <input 
          type="password" 
          name="password"
          onChange={(e)=>setPassword(e.target.value)}
          required placeholder='Password' />

        <input 
          type="password" 
          name="password2"
          onChange={(e)=>setPassword2(e.target.value)}
          required  placeholder='Confirm your Password' />

        <div className='btn-container'>
          <button type='submit' className='button'>Register</button>
        </div>
        <span>Already Have an Account ?&nbsp;&nbsp; 
          <Link to="/login">Login</Link>
        </span>

      </form>
    </div>
    <Footer />
    </>
  )
}

export default Register
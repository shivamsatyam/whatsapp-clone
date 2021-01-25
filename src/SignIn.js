import React,{useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Navbar'
import {useHistory} from 'react-router-dom'

function SignIn () {
	const history = useHistory()
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [phoneNumber, setphoneNumber] = useState('')

	function handleSubmit (event) {
		console.log('the handle method run')
		event.preventDefault()
		// localStorage.clear()
		const data_array = {'name':name,'email':email,'password':password,'phone':phoneNumber,isUser:false}
		
		localStorage.setItem('shivam_whatsapp',JSON.stringify(data_array))
	
		
		history.push('/login')
	}
	return(
		<div style={{
		   width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: 'center',
    backgroundImage:'linear-gradient(to left top,rgb(243 98 98 / 80%),rgb(232 99 154 / 90%))'
			}}>
		<div className="container">
		<form className="form" onSubmit={handleSubmit}>
		  <label className="sr-only" for="inlineFormInputGroupUsername2">Username</label>
		   <input type="text" className="form-control my-3" value={name} onChange={(e)=>{setName(e.target.value)}} type="text" id="inlineFormInputGroupUsername2" placeholder="Username"/>
		 
		  <label className="sr-only" for="inlineFormInputGroupUsername2">Email</label>
		   <input type="text" className="form-control my-3" value={email} onChange={(e)=>{setEmail(e.target.value)}} type="email" id="inlineFormInputGroupUsername2" placeholder="Enter your email"/>

		  <label className="sr-only" for="inlineFormInputGroupUsername2">Phone Number</label>
		   <input type="text" className="form-control my-3" value={phoneNumber} onChange={(e)=>{setphoneNumber(e.target.value)}} type="password" id="inlineFormInputGroupUsername2" placeholder="Enter your phoneNumber"/>

		  <label className="sr-only" for="inlineFormInputGroupUsername2">Password</label>
		   <input type="text" className="form-control my-3" value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" id="inlineFormInputGroupUsername2" placeholder="Enter your password"/>

		
		 
		  <button type="submit" className="btn btn-success">SignIn</button>
		</form>
		</div>
		</div>				
		)
}


export default SignIn 







































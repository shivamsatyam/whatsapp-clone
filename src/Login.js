import React,{useState} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useHistory} from 'react-router-dom'
import {db} from './firebase'
import firebase from 'firebase'
function Login () {
	const history = useHistory()
	const [name, setName] = useState('')
	const [password, setPassword] = useState('')
	function handleSubmit (event) {
		event.preventDefault()

		const retrive_data = JSON.parse(localStorage.getItem('shivam_whatsapp'))
		const localStorage_username = retrive_data['name'].toString()
		const localStorage_password = retrive_data['password'].toString()

		if ((localStorage_username===name)&& (localStorage_password===password)) {
				retrive_data['isUser'] = true;
				localStorage.setItem('shivam_whatsapp_user',JSON.stringify(retrive_data))
				db.collection('users').add({
					email:retrive_data['email'],
					username:retrive_data['name'],
					password:retrive_data['password'],
					phone:retrive_data['phone'],
					timestamp:firebase.firestore.FieldValue.serverTimestamp()
				})
				
				history.push('/')				
		}else{
			
			alert("Envalid login details")
		}

		

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
		   <input type="text" className="form-control my-3"  onChange={(event)=>{setName(event.target.value)}} type="text" id="inlineFormInputGroupUsername2" placeholder="Enter your Username"/>

		  <label className="sr-only" for="inlineFormInputGroupUsername2">Password</label>
		   <input type="text" className="form-control my-3" onChange={(event)=>{setPassword(event.target.value)}} type="password" id="inlineFormInputGroupUsername2" placeholder="Enter your password"/>

		
		 
		  <button type="submit" className="btn btn-success">Login</button>
		</form>
		</div>
		</div>				
		)
}


export default Login 







































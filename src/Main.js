import React,{useState,useEffect} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Main.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Logo from './logo.svg'
import BackGround from './28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'
import {AiOutlineSend} from 'react-icons/ai'
import {AiOutlineSmile} from 'react-icons/ai'
import MessageBox from './MessageBox'
import {BsThreeDotsVertical} from 'react-icons/bs'
import {GiFishhookFork} from 'react-icons/gi'
import SignIn from './SignIn'

import {db} from './firebase'
import {useHistory} from 'react-router-dom'

function Main () {
	const history = useHistory()
	const [textValue, setTextValue] = useState('')
	const [message,setMessage] = useState([])
	const [username,setUsername] = useState('shivam')
	const [newUser,SetnewUser] = useState()
	const [AllFirebaseUsers, setAllFirebaseUsers] = useState([])

	// firebase function is implemented


	useEffect(()=>{
		db.collection('users').doc({phone:'123456'}).get().then((b)=>{
			console.log("the data is ",b)
		})

		const Signin_detail = localStorage.getItem('shivam_whatsapp')
		const login_details = localStorage.getItem('shivam_whatsapp_user')

		if (Signin_detail===null) {
			history.push('/signup')
		}else if(login_details===null){
			history.push('/login')
		}
	},[])




	function Media (props) {
		return (<div className="media">
										<img className="d-flex mr-3" src={props.Logo} alt="Generic placeholder image"/>
										<div className="media-body">
											<h5 className="mt-0">{props.title}</h5>
										</div>
									</div>)
	}



	function handleSubmit (event) {
		event.preventDefault()
		setMessage([...message,{
			type:'text',
			message:textValue,
			image:'',
			senderName:'shiva',
			receiverName:'satyam',

		}])
		setTextValue('')
	}

	function AddUser (event) {
		console.log('the add user button is clicked')
		
		const user = prompt("Enter the phone of the user name")
		SetnewUser(user)
		setAllFirebaseUsers([...AllFirebaseUsers,{
			username:user,
			email:"",
		}])
	}
	return (
		<div className="main__app">
		
			<div className="main__app__color1"></div>
			<div className="main__app__color2"></div>
			<div className="main__app__center">
				<div className="main__app__center__left__scroll__div">
					<div className="media">
										<img className="d-flex mr-3" src={Logo} alt="Generic placeholder image"/>
										<div className="media-body">
											<h5 className="mt-0">The Power of Fear and the power</h5>
										</div>
									</div>
						<div className="search__input">
							
							<input class="btn btn-default btn-sm" type="text" value="Input" placeholder="Search"/>			
						</div>			
					{
						

						AllFirebaseUsers.map((value,index)=>{
							console.log(value)
							return <Media key={index} title={value.username} Logo={Logo}/>
						})
					}
				</div>
				<div className="main__app__center__right__scroll__div" style={{backgroundImage :`url(${BackGround})`,overflow : 'auto'}}>
					<div className="main__app__center__header">
						<div className="main__app__center__header__image">
							<img src={Logo} alt=""/>
						</div>
						<div className="main__app__center__header__name">
							<h2>Shivam Kumar</h2>
							<small>typing...</small>

						</div>
						<div className="main__app__center__header__icons">
							<GiFishhookFork/>
							<button type="button" onClick={AddUser} class="btn btn-success" style={{'width': '6vw',margin:'1px 12px'}}>Add user</button>
							<BsThreeDotsVertical/>
						</div>
					</div>
					<form onSubmit={handleSubmit}>
					<div className="main__app__center__input" style={{position:'fixed'}}>
						<div className="main__app__center__setting">
							<AiOutlineSmile/>
						</div>
						<input type="text" minLength='4' value={textValue} onChange={(e)=>{setTextValue(e.target.value)}}/>
						<button type="submit"><AiOutlineSend style={{color:"white"}}/></button>
					</div>
				</form>

				{
					message.map((val,index)=>{
						return <MessageBox key={index} data={val} username={username}/>
					})
				}

				</div>

			</div>
		</div>
	)
}


export default  Main


























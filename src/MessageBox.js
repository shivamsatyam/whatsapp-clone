import React from 'react'
import {Card,CardContent,Typography} from '@material-ui/core'
import {FaCheckDouble} from 'react-icons/fa'
import './MessageBox.css'
const date = new Date()
const hour = date.getHours()
const second = date.getMinutes()
let realHour = 0
if (hour>12) {
	realHour = parseInt(hour)-12;
}else if(hour===parseInt(12)){
	realHour = 12
}else{
	realHour = hour
}

function MessageBox ({data,username}) {

	console.log(data)
	const isUser = data.senderName === username
	console.log("the user is ",data.senderName,username,isUser)
	return (
	
	<div className={`MessageBox ${isUser?'MessageBox__user':'MessageBox__default'}`}>	
	<Card className={`${isUser?'MessageBox__user__card':'MessageBox__default__card'}`}>
		<CardContent>
			<Typography color="white" variant="h5" component="h2">
				{data.message}
				<small>{`${realHour}.${second}`} <FaCheckDouble/></small>
			</Typography>
		</CardContent>
	</Card>
	</div>		

	)
}


export default MessageBox
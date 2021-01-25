import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {NavLink} from 'react-router-dom'

function Navbar () {
	return(
		
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
						<a className="navbar-brand">Navbar</a>
						<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
							<span className="navbar-toggler-icon"></span>
						</button>
		
						<div className="collapse navbar-collapse" id="navbarsExample09">
							<ul className="navbar-nav mr-auto">
								<li className="nav-item active">
									<a className="nav-link" href="https://shivamcorona.netlify.app">corona detals</a>
								</li>
								<li className="nav-item active">
									<a className="nav-link" href="https://shivammessanger.netlify.app">messanger</a>
							
								</li>
								<li className="nav-item active">
									<a className="nav-link" href="https://shivamforum.heroku.app">forum</a>
							
								</li>
								<li className="nav-item active">
									<a className="nav-link" href="https://github.com/shivamsatyam">github</a>
							
								</li>
						
								
								
							</ul>
							<form className="form-inline my-2 my-lg-0" onSubmit={(e)=>{e.preventDefault()}}>
								<input className="form-control" type="text" placeholder="Search" aria-label="Search" />
								<button className="btn btn-outline-success my-2 my-sm-0" type="Submit">
									<NavLink style={{color:'white'}} className="nav-link" exact to="/signup">Signin</NavLink>
								</button>

								<button className="btn btn-outline-success my-2 my-sm-0" type="Submit">
									<NavLink style={{color:'white'}} className="nav-link" exact to="/login">login</NavLink>
								</button>
								
							</form>
						</div>
					</nav>	
		
		)
}


export default Navbar 







































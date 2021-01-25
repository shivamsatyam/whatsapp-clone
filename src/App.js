import logo from './logo.svg';
import './App.css';
import {Switch,Route} from 'react-router-dom'
import Main from './Main'
import SignIn from './SignIn'
import Login from './Login'

function App() {
  return (
  	<Switch>

  		<Route exact path="/signup" component={SignIn}></Route>
  		<Route exact path="/login" component={Login}></Route>
  		<Route path="/" component={Main}></Route>
  		
  	</Switch>
  );
}

export default App;

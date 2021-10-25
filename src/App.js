import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import Calo from './Calorie';
import HomePage from './Pages';
import Login from './components/Login';
import Main from './components/Main';
import LoginSignup from './components/LoginSignup';
import SignUp from './components/SignUp';
// import { LoginPage } from './components/loginPage';


function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/login" component={Login } exact/>
      <Route path="/main" component={Main} exact/>
      <Route path="/signup" component={SignUp} exact/>
    </Switch>
      {/* <Navbar/> */}
    {/* <Switch> */}
      <Route path="/loginsignup" component={LoginSignup}/>
      <Route path="/home" component={Home} exact/>
      <Route path="/profile" component={Profile} exact/>
      <Route path="/calorie" component={Calo} exact/>
    {/* </Switch> */}
    </Router>
  );
}

export default App;

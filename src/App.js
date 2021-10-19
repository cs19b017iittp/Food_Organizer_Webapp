import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import calo from './Calorie';
import Navbar from './components/Navbar'
import Login_Signup from './components/Login_Signup';
function App() {
  return (
    <Router>
    <div classNameName="App">
      {/* <header classNameName="App-header"> */}
        {/* <img src={logo} classNameName="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          classNameName="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
  <body>
    <Navbar/>
<br/>
    {/* <Link classNameName="home" to="/home">Home_page</Link> */}
    <Route path="/home" component={Home}/>

    {/* <Link classNameName="profile" to="/profile">Profile_page</Link> */}
    <Route path="/profile" component={Profile}/>

    {/* <Link  classNameName="calorie"to="/calorie">Calorie_page</Link> */}
    <Route path="/calorie" component={calo}/>
    </body>
   {/* <Home/> */}
   
      {/* </header> */}
    </div>
    <Login_Signup />

    </Router>
  );
}

export default App;

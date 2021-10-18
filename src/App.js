import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Route,Link} from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import calo from './Calorie';
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
    <div className="App">
      {/* <header className="App-header"> */}
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
  <body>
    <Navbar/>
<br/>
    {/* <Link className="home" to="/home">Home_page</Link> */}
    <Route path="/home" component={Home}/>

    {/* <Link className="profile" to="/profile">Profile_page</Link> */}
    <Route path="/profile" component={Profile}/>

    {/* <Link  className="calorie"to="/calorie">Calorie_page</Link> */}
    <Route path="/calorie" component={calo}/>
    </body>
   {/* <Home/> */}
   
      {/* </header> */}
    </div>
    </Router>
  );
}

export default App;

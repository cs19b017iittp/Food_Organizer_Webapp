import './App.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import calo from './Calorie';
import Navbar from './components/Navbar'
function App() {
  return (
    <Router>
    <div classNameName="App">
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
    </div>
    </Router>
  );
}

export default App;

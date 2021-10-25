import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import Home from './Home';
import Profile from './Profile';
import Calo from './Calorie';
import HomePage from './Pages';
import Login from './components/Login';
import Main from './components/Main';
import Carousel from './components/Carousel';
import SignUp from './components/SignUp';

import Fruits from './components/Fruits';
import Vegetables from './components/Vegetables';
import MilkProducts from './components/MilkProducts';
import LeafyVegetables from './LeafyVegetables';
import Grains from './Grains';

import Addproduct from "./Addproduct";

import { LoginPage } from './components/loginPage/loginNew';



function App() {
  return (
    <Router>
    <Switch>
      <Route path="/" component={HomePage} exact/>
      <Route path="/loginpage" component={LoginPage } exact/>
      <Route path="/main" component={Main} exact/>
      <Route path="/signup" component={SignUp} exact/>
    </Switch>
      {/* <Navbar/> */}
    {/* <Switch> */}
      <Route path="/carousel" component={Carousel }/>
      <Route path="/home" component={Home} exact/>
      <Route path="/profile" component={Profile} exact/>
      <Route path="/calorie" component={Calo} exact/>
      
      <Route path="/fruits" component={Fruits}/>
      <Route path="/vegetables" component={Vegetables}/>
      <Route path="/MilkProducts" component={MilkProducts}/>
      <Route path="/LeafyVegetables" component={LeafyVegetables}/>
      <Route path="/Grains" component={Grains}/>
      <Route path="/Addproduct" component={Addproduct}/>

    {/* </Switch> */}
    </Router>
  );
}

export default App;

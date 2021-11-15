
import React,{Component} from 'react'
import Navbar from './Navbar';
import food from '../images/food.jpg'


class Inventory extends Component {

    render() { 
        var x = localStorage.getItem("userName")
        return (
            <>
            <Navbar/>
            <div>
                <p id="para">{x}</p>
                <img src={food} alt="Items"/>
            </div>
            </>
        )
    }
}
export default Inventory;


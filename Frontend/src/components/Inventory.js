
import React,{Component} from 'react'


class Inventory extends Component {

    render() { 
        var x = localStorage.getItem("userName")
        return (<div>
    
            <p id="para">{x}</p>
        </div>
                )
    }
}
export default Inventory;


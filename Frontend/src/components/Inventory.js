import React,{Component} from 'react'
import Navbar from './Navbar';

class Inventry extends Component {

    state = {
        selectedFile: null,
    }
    // onFileSelect = 

    render() { 
        return <div>
            {/* <input type="file" onChange={onFileSelect}/> */}
            <Navbar/>
        </div>;
    }
}
 
export default Inventry;

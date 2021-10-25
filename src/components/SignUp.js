import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
// Signup page


var cnt = 0;
class SignUp extends Component {
    state={
        imgs: [
            {title:'Apple', desc:"A red color fruit"},
            {title:"Mango", desc:"A Yellow color fruit"},
        ],
        tag: 'This is signup page',
    }
    changeTag=()=>{
        if(cnt%2===1){
            this.setState({tag:'Hello world '+cnt});
        }
        else{
            this.setState({tag:'please login first :) '+cnt});
        }
        cnt++;
    }
    render() { 
        return(

            <div>
                <label>Email</label>
                <input type="email" required></input>
                <br/><br/>
                <label>Username</label>
                <input type="text" required></input>
                <br/><br/>
                <label>Phone</label>
                <input type="tel" required></input>
                <br/><br/>
                <label>Password</label>
                <input type="password" required></input>
                <br/><br/>
                <label>Confirm Password</label>
                <input type="password" required></input>
                <br/>
                <Button to="/main" primary='true'
                        dark='true'
                        smooth={true} duration={500} spy={true} exact='true' offset={-80}>
                            Enter
                        </Button>
                <Link to="/loginpage">Already a user ?</Link>
            </div>

    );
    }
}
 
export default SignUp;
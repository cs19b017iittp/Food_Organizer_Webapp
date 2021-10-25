import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';



// export default function SignUp(){
    
//     return(<div>
//             <h2 className="text-2xl my-3">This is SignUp</h2>
//             <div className="flex my-3">
//                 <SingleImage title="Apple" desc="A red color fruit"/>
//                 <SingleImage title="Mango" desc="A yellow color fruit"/>
//                 <button onClick={change}>Click</button>
//             </div>  
//         </div>
//     );
// }

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
                <Link to="/login">Already a user ?</Link>
            </div>
        // <div>
        //     <h2 className="text-2xl my-3">{this.state.tag}</h2>
        //     <div className="flex my-3">
        //         <SingleImage title={this.state.imgs[0].title} desc={this.state.imgs[0].desc}/>
        //         <SingleImage title={this.state.imgs[1].title} desc={this.state.imgs[1].desc}/>
        //         <button type='button' onClick={this.changeTag}>Click</button>
        //     </div>  
        // </div>
    );
    }
}
 
export default SignUp;
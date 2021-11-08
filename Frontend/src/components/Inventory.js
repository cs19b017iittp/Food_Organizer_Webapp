
import React,{useState} from 'react'
import { b } from './loginPage/loginNew';

// export default function Inventory(props) {
//     // const [items,setitems]=useState({props.id});
// //  const print=()=>{
// //      console.log(a)
// //  }
// const {mailid}=props.location
//     return (
//         <div>

//          <p> mailid is: {mailid}</p>
//         </div>
//     )

// }
export default function Inventoy(){

        const mailid=localStorage.getItem("id")
        return(
            <>
           <h1>mailid</h1>
           <h2>{mailid}</h2>
            </>
        )

}

import React,{useState,useEffect} from 'react'
import { Button } from './components/StyleScrolltop'
import axios from 'axios'
var id
export default function Updateprofile() {
    const [name, setname] = useState("");
    const [number, setnumber] = useState(0);
    const [gender,setgender]=useState("");
   useEffect(()=>{
    var x = localStorage.getItem("userName");
    axios.post("http://localhost:3001/user/getmailid", { emailId: x });
    axios.get("http://localhost:3001/user/read").then((response) => {
        // console.log(response.data);
        id=response.data[0]._id 
        // console.log(response.data)
      });
   },[]);

const updatedetails=()=>{
    axios.put("http://localhost:3001/user/update",{id:id,username:name,phone:number,gender:gender});
}
    return (
        <div>
            <div className="mb-3 row">
                <label htmlFor="inputtext" className="col-sm-2 col-form-label">
                    Name
                </label>
                <div className="col-sm-10">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="1"
                        onChange={(e)=>{
                            setname(e.target.value)
                        }}
                    ></textarea>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputgender" className="col-sm-2 col-form-label">
                   Gender
                </label>
                <div className="col-sm-10">
                    <textarea
                        className="form-control"
                        id="fillnumber"
                        rows="1"
                        onChange={(e)=>{
                            setgender(e.target.value)
                        }}
                    ></textarea>
                </div>
            </div>
            <div className="mb-3 row">
                <label htmlFor="inputnumber" className="col-sm-2 col-form-label">
                    Number
                </label>
                <div className="col-sm-10">
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea3"
                        rows="1"
                        onChange={(e)=>{
                            setnumber(e.target.value)
                        }}
                    ></textarea>
                </div>
            </div>
            <a
          id="update_profilebuttton"
          type="button"
         href="/profile"
          className="btn btn-primary"
          onClick={()=>updatedetails()} >  Update
        </a>
        </div>
    )
}


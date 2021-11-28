import Axios from 'axios';
import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../context/UserContext';


export default function Notifications () {
    const { user } = useContext(UserContext);
    const [notifications, setNotification] = useState([]);

    useEffect(()=>{
        Axios.post('http://localhost:3001/user/notifications',{
            "userid":user._id
        })
        .then(response => setNotification(response.data));
        console.log(user.notifications.length);
    },[]);

    let returnData;
    if(notifications.length>=1){
        returnData = notifications.map(notification=>{
            return <Notifications notification={notification}/>
        })
    }
    else{
        returnData = <h1>No new Notifications</h1>
    }
    return {
        returnData
    }
}
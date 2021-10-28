import React,{useState} from 'react';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data';
import Info from '../components/MainSection';
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar';

// this is page when we open the website
const HomePage = () =>{
    const [isOpen,setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            {/* <Navbar1/> */}
            <Info/>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
            <InfoSection {...homeObjThree}/>
            <Footer/>
        </>
    );
} 
export default HomePage
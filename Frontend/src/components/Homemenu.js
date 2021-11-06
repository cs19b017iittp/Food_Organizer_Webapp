import React,{useState} from 'react'
import {BiMenu} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AiOutlineClose } from 'react-icons/ai';
import { SidebarData } from './SidebarData';

export default function Homemenu() {
    
        const [sidebar, setSidebar] = useState(false)

        const showSidebar = () => setSidebar(!sidebar)
        return (
        <>
        <div>
            <BiMenu onClick={showSidebar}/>
        </div>
        <nav className={sidebar ? 'nav-bar active' : 'nav-menu'}>
            <ul className='nav-menu-items'>
                <li className="navbar-toggle">
                    <Link to='#' className='menu-bars'>
                        <AiOutlineClose />
                    </Link>
                </li>
                {SidebarData.map((item,index) => {
                    return(
                        <li key={index} className={item.cName}>
                            <Link to={item.path}>
                                {item.icon}
                                <span>
                                    {item.title}
                                </span>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )
}

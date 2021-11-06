import React from 'react';
import {BiMenu} from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
export const SidebarData = [
    {
        title: 'Home',
        path: '/Home',
        icon : <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Profile',
        path: '/Profile',
        icon : <AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Calorie',
        path: '/Calorie',
        icon : <AiFillHome />,
        cName: 'nav-text'
    },
]
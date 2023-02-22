import './navbar.css'
import logo from './images/netflix.png'
import avatar from './images/avatar.png'
import { useEffect, useState } from 'react'


export const Navbar=()=>{
    const [show,handleShow]=useState(false)
    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            window.scrollY>100?handleShow(true):handleShow(false)
        })

    },[])
    return (
        <div className={`navbar ${show && "navbg"}`}>
            
            <img className='logo-img' src={logo} alt=""/>

            <img className='avatar-img' src={avatar} alt=""/>

        </div>
    )
}
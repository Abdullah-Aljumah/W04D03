import React from 'react'
import { Link } from 'react-router-dom';
import './style.css'
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useHistory } from 'react-router';
 const Nav = () => {
     const history = useHistory()
    const goBack = () => {
        history.goBack()

    } 


    return (
        <div className='nav'>
            <div className='icon'>< IoArrowBackCircleSharp onClick={goBack}/></div>
            <Link to='/'  className='links'>Home</Link>
            <Link to='/Contact' className='links' >Contact</Link>
            <Link to='/Cards'className='links'  >Cards</Link>

        </div>
    )
}

export default Nav;
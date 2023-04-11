import React from 'react';
import logo from '../img/default.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineSearch } from 'react-icons/ai';
const Navbar = () => {
  return (
    <>
       <div className='header-outer d-flex row py-2'>
            <div className='col-6 col-xl-2 h-100'>
                <img className='h-100' src={logo} />     
            </div>
            <div className='d-none col-md-7 d-xl-flex position-relative'>
                <AiOutlineSearch className='search-icon'/>
                <input className='search-input' placeholder='Search' type='search'/>
                <button className='brow-prime'>Browse Premium</button>
                <button className='get-prime'><span style={{ marginRight : '6px',fontSize: '16px'}}>👑</span>  Get unlimited downloads </button>
            </div>
            <div className=' col-6 col-xl-3 left-head navbar-hower'>
                <button className='CHALLENGES'>CHALLENGES</button>
                <button className='UPLOAD'> UPLOAD</button>
                <button className='LOGIN'> LOGIN</button>
            </div>
       </div>
       <div className='py-3 down-head'>
        <span>Trending</span>
        <span>Templates</span>
        <span>ILLustration</span>
        <span>UI kits</span>
        <span>ICon</span>
        <span>Mockups</span>
        <span>Themes</span>
        <span>Fonts</span>
       </div>
    </>
  )
}

export default Navbar

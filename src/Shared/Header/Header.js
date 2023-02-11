import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo1.gif'
import '../Header/Header.css'

const Header = () => {
    const menuItems = 
    <React.Fragment>
        <li className='menu-design'><Link to = '/'>Home</Link></li>
        <li className='menu-design'><Link to = '/allcategories'>Category</Link></li>
       
    </React.Fragment>



return (
    <div className='relative'>
       <div className="fixed z-40 top-0 py-4 px-4 navbar bg-black text-white navdesign">
<div className="navbar-start ">
<div className="dropdown">
  <label tabIndex={0} className="btn btn-ghost lg:hidden">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
  </label>
  <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
    {menuItems}
  </ul>
</div>
<img className='w-20 h-20' src={logo} alt='logo'/>
<p className='blind-text'>Shope is Open Now</p>
</div>
<div className="navbar-center hidden lg:flex">
<ul className="menu menu-horizontal px-1">
{menuItems}
</ul>
</div>

{/* <div className="navbar-end">



</div> */}
</div>
    </div>
);
};

export default Header;
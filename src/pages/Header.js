import React, { useState } from 'react'
import NavlistItem from '../components/NavlistItem';
import navListData from '../data/NavlistData';
import "./header.css";
import Search from '../components/Search';
import Button from '../components/Button';

const Header = ({scroll}) => {

const [navList,setNavList]=useState(navListData)


const handleOnclick = (id)=>{
  const newNavlist =navList.map((nav)=>{
    nav.active=false;
    if(nav._id===id) nav.active=true;
    return nav
  })

  setNavList(newNavlist)

}

  return (
  <header className={`${scroll>100 ? "scrolled" :undefined}`}>

    <a href="/" className='logo'>
        cinema

    </a>

   <ul className='nav'>
            {
              navList.map((nav)=>(
                <NavlistItem key={nav._id} nav={nav} navOnClick={handleOnclick}/>

              ))
            }

  

   </ul>

   <Search />
   <Button icon={<ion-icon name="log-in-outline"></ion-icon>} name="Sign In"/>



  </header>
  )
}

export default Header
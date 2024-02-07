// Header component
import React, { useState } from 'react';
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import PhoneBtn from '../PhoneBtn/PhoneBtn';
import MenuIcon from '../ui/MenuIcon/MenuIcon';

import './header.scss'

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [activeIcon, setActiveIcon] = useState(false);

  const menuOpen = () =>{
    setOpen(!isOpen);
    setActiveIcon(!activeIcon);
  }

  return (
    <header className='z-50 py-2'>
      <div className="container ">
        <Logo />
        <Navigation className="header__nav" isOpen={isOpen} />
        <PhoneBtn />
        <MenuIcon className="menu_icon flex md:hidden" onClick={menuOpen} active={activeIcon} />
      </div>
    </header>
  );
}

export default Header;

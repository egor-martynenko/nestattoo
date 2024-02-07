
// MenuIcon component
import React from 'react';

const MenuIcon = ({ className, onClick, active }) => {
  return (
    <div className={`${className} ${active ? 'menu_icon_active' : ''}`} onClick={onClick}>
      <span></span>
    </div>
  );
}

export default MenuIcon;

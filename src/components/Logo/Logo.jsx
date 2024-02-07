import React, { Component } from 'react'
import { animateScroll as scroll } from "react-scroll";


class Logo extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render(){
    return (
      <div 
        className="logo cursor-pointer z-50"
        onClick={this.scrollToTop}>
          <span className="logo font-light text-3xl md:font-bold text-white ">NesTattoo</span>
      </div>
    )
  }
  
}

export default Logo
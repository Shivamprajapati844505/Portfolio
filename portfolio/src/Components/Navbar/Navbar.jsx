import "./Navbar.css";
import { useState, useRef } from "react";
import logo from "../../assets/logo.svg";
import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'

function Navbar() {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

   const openMenu = ()=>{
    menuRef.current.style.right="0";
   }
   const closeMenu = ()=>{
    menuRef.current.style.right="-350px";
   }

   
  return (
    <div className="navbar">
      <img src={logo} alt="logo" />
      <img className="nav-mob-open" onClick={openMenu} src={menu_open} alt="open" />
      <ul ref={menuRef} className="nav-menu">
        <img className="nav-mob-close" onClick={closeMenu}  src={menu_close} alt="" />
        <li>
          <AnchorLink className="anchor-link " href='#home'>
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href='#about'>
            <p onClick={() => setMenu("about")}>About Me</p>
            </AnchorLink>
          {menu === "about" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link"  offset={50} href='#work'>
            <p onClick={() => setMenu("work")}>My work</p>
            </AnchorLink>
          {menu === "work" && <img src={underline} alt="underline" />}
        </li>
        <li>
          <AnchorLink className="anchor-link"  offset={50} href='#contact'>
            <p onClick={() => setMenu("contact")}>Contact</p>
            </AnchorLink>
          {menu === "contact" && <img src={underline} alt="underline" />}
        </li>
      </ul>
      <div className="nav-connect"> <AnchorLink className="anchor-link"  offset={50} href='#contact'>Connect With Me </AnchorLink></div>
    </div>
  );
}

export default Navbar;

import "../../assets/css/nav.css";
import Logo from "../../assets/images/logo.svg";
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import Button from "@mui/material/Button";

function Nav() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 900px)' });
  const [showDropdown, setShowDropdown] = useState(false);
  const [isVisible, setIsVisible] = useState(true); // Controls navbar visibility
  const [lastScrollY, setLastScrollY] = useState(0); // Stores the last scroll position

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  // Handle scroll direction
  const controlNavbar = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY) { // if scrolling down
        setIsVisible(false);
      } else { // if scrolling up
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY); // Update the last scroll position
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <>
      <div className={`nav ${isVisible ? 'visible' : 'hidden'}`}>
        <nav className="navbar navbar-light">
          <div className="container-fluid p-0">
            <a className="navbar-brand text-center" href="/">
              <img src={Logo} alt="" className="d-inline-block logo align-text-top mt-2" />
            </a>
            {isTabletOrMobile && (
              <button className="menu-button" onClick={toggleDropdown}>
                <MenuIcon className="menu" />
              </button>
            )}

            <AnimatePresence>
              {showDropdown && isTabletOrMobile && (
                <motion.div
                  className="dropdown"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -100 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="content">
                    <a href="/product">PRODUCTS</a>
                    <a href="/market">MARKETS</a>
                    <a href="/cap">CAPABILITIES</a>
                    <a href="/about">ABOUT US</a>
                    <a href="#">CONTACT US</a>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {!isTabletOrMobile && (
              <ul className="list-item pt-1">
                <li className="nav-item"><a href="/about">ABOUT US</a></li>
                <li className="nav-item"><a href="/product">PRODUCTS</a></li>
                <li className="nav-item"><a href="/market">MARKETS</a></li>
                <li className="nav-item"><a href="/cap">CAPABILITIES</a></li>
                <li className="nav-item"><a href="/cont">
                  <Button variant="contained" className="contact-btn">CONTACT US</Button>
                </a></li>
              </ul>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}

export default Nav;

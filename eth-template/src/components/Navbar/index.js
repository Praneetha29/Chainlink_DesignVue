import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink, NavBtnVerify } from './NavbarElements';

const Navbar = ({ showNavMenu = true }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            DesignVue
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>

          {showNavMenu && (
            <NavMenu isOpen={isOpen}>
              <NavItem>
                <NavLinks to="about">About</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="features">Features</NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to="sponsors">Sponsors</NavLinks>
              </NavItem>
            </NavMenu>
          )}

          <NavBtn>
            <NavBtnVerify to="/verify">Verify User</NavBtnVerify>
          </NavBtn>

          <NavBtn>
            <NavBtnLink to="/connect-wallet">
              Connect Wallet
            </NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
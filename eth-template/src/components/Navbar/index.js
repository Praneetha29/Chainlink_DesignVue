
import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink, NavBtnVerify} from './NavbarElements';
import NFT from "../../contracts/NFT.json";
import Marketplace from "../../contracts/NFTMarketplace.json";
import TokenTransferor from "../../contracts/TokenTransferor.json";
import LINK from "../../contracts/LINK.json";
import CCIP from "../../contracts/CCIP.json";
const {ethers} = require("ethers");

const Navbar = ({web3Handler,account,showNavMenu = true}) => {

const[isOpen, setIsOpen]= useState(false)
const [marketplace, setMarketplace] = useState(null);
const [nft, setNft] = useState(null);
const [tokenTransferor, setTokenTransferor] = useState(null);
const [tokenLINK, setTokenLINK] = useState(null);
const [tokenCCIP, setTokenCCIP] = useState(null);
const [id,setId] = useState(0);



function setIdfunc(_id){
  setId(_id);
}

const toggle = () => {
    setIsOpen(!isOpen)
}

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

          {/* Here, we're conditionally rendering NavMenu based on showNavMenu prop */}
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
            {account ? (
              <NavBtnLink>
                {account.slice(0, 6)}...{account.slice(-4)}
              </NavBtnLink>
            ) : (
              <NavBtnLink onClick={web3Handler}>
                Connect Wallet
              </NavBtnLink>
            )}
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
}

export default Navbar;
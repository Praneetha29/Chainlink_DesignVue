import { MetaMaskButton } from "@metamask/sdk-react-ui";
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavLinks, NavBtn, NavBtnLink, NavBtnVerify } from './NavbarElements';
const { ethers } = require("ethers");

const Navbar = ({ web3Handler, account }) => {

    const [isOpen, setIsOpen] = useState(false)
    const [marketplace, setMarketplace] = useState(null);
    const [nft, setNft] = useState(null);
    const [tokenTransferor, setTokenTransferor] = useState(null);
    const [tokenLINK, setTokenLINK] = useState(null);
    const [tokenCCIP, setTokenCCIP] = useState(null);
    const [id, setId] = useState(0);



    function setIdfunc(_id) {
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


                    <NavBtn>
                        <NavLinks to="/upload">Upload Design</NavLinks>
                    </NavBtn>
                    <NavBtn>
                        <NavLinks to="/mint">Mint NFT</NavLinks>
                    </NavBtn>
                    <NavBtn>
                        <NavBtnVerify to="/verify">Verify User</NavBtnVerify>
                    </NavBtn>
                    <NavBtn>
                        {account ? (
                            <NavBtnLink onClick={web3Handler}>
                                {account.slice(0, 6)}...{account.slice(-4)}
                            </NavBtnLink>
                        ) : (
                            <NavBtnLink onClick={web3Handler}>
                                Load Contracts
                            </NavBtnLink>
                        )}
                    </NavBtn>
                    <MetaMaskButton theme={"dark"} color="black"></MetaMaskButton>
                    
                    
                </NavbarContainer>
            </Nav>
        </>

    );
}

export default Navbar;
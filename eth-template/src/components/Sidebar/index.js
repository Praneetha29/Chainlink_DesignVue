import React from 'react'
import { SidebarContainer, Icon, CloseIcon,SidebarLink, SidebarRoute, SidebarWrapper, SidebarMenu, SideBtnWrap } from './SidebarElements'

const Sidebar = ({isOpen, toggle}) => {
  return (
    <>
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon>

            </CloseIcon>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
            <SidebarLink to="about" onClick={toggle}>
                About
            </SidebarLink>
            <SidebarLink to="features" onClick={toggle}>
                Features
            </SidebarLink>
            <SidebarLink to="sponsors" onClick={toggle}>
                Sponsors
            </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
            <SidebarRoute to='/connect'>
                Connect Wallet
            </SidebarRoute>
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>



    </>
  )
}

export default Sidebar
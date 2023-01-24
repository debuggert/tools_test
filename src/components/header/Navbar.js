import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
    width:100%;
`

const NavLinks = styled.a`
font-style: normal;
font-weight: 400;
font-size: 2.2em;
line-height: 2.7em;
color: ${({ theme }) => theme.colors.black};
text-decoration:none;
border-bottom: 1px solid rgba(155, 149, 145, 0.5);
&:hover {
    border:0;
}
`

const PhoneLink = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 2.2em;
    line-height: 1.2em;
    color: ${({ theme }) => theme.colors.blue};
    border-bottom: 1px solid rgba(72, 89, 240, 0.3);
    text-decoration:none;
    float:right;
    &:hover {
        border:0;
    }
`

const Navbar = () => {
    return (
        <NavbarContainer>
            <NavLinks href="#">Products</NavLinks>
            <NavLinks href="#">Resources</NavLinks>
            <NavLinks href="#">Services</NavLinks>
            <NavLinks href="#">Locations</NavLinks>
            <NavLinks href="#">Careers</NavLinks>
            <NavLinks href="#">Support</NavLinks>
            <PhoneLink href="tel:+(844) 434-672">+(844) 434-672</PhoneLink>
        </NavbarContainer>
    );
};

export default Navbar;
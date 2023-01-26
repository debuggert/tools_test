import { useState } from "react"
import styled from "styled-components";
import Navbar from "./Navbar";

const MenuBtn = styled.div`
    width: 35px;
    height: 25px;
    position: absolute;
    top: 30px;
    right: 0;
    outline: none;
    z-index: 305;
    cursor:pointer;
    display:none;
    @media(${({ theme }) => theme.media.small}){
        display:block;
    }
`

const Bar = styled.div`
    height: 2px;
    width: 16px;
    display: block;
    margin: 4px auto;
    position: relative;
    background: ${({ theme }) => theme.colors.black};
    transition: 0.4s;
    &:nth-of-type(1) {
        animation: rotateR 1.5s cubic-bezier(0.5, 0.2, 0.2, 1);
    }
    &:nth-of-type(2) {
        animation: fade 1.5s cubic-bezier(0.1, 0.8, 0.1, 1);
    }
    &:nth-of-type(3) {
        animation: rotateL 1.5s cubic-bezier(0.5, 0.2, 0.2, 1);
    }
`
const MobileNavbar = styled.div`
    display:block;
    @media(${({ theme }) => theme.media.small}){    
        display:none;
    }
`
const MenuBlock = styled.section`
    width:100%;
    &.show {
        ${Bar} {
            &:nth-of-type(1) {
                transform: translateY(5px) rotate(45deg);
            }
    
            &:nth-of-type(2) {
                opacity: 0;
            }
    
            &:nth-of-type(3) {
                transform: translateY(-7px) rotate(-45deg);
            }
        }
        ${MobileNavbar} {
            display:block;
        }
    }
`



const Menu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        !menuOpen ? setMenuOpen(true) : setMenuOpen(false);
    }

    return (
        <MenuBlock className={ menuOpen ? 'show' : ''}>
            
            <MenuBtn  onClick={() => {toggleMenu(); console.log('click?')}}>
                <Bar/>
                <Bar/>
                <Bar/>
            </MenuBtn>
        
            <MobileNavbar>
                <Navbar/>
            </MobileNavbar>
        </MenuBlock>
    )
}


export default Menu;
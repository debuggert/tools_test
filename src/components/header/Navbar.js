import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.nav`
    width:100%;
    @media${({ theme }) => theme.media.small}{
        display:flex;
        flex-direction:column;
        align-items:center;
        justify-content:center;
    }
`

const NavLinks = styled.a`
font-style: normal;
font-weight: 400;
font-size: 2.2em;
line-height: 1.2em;
color: ${({ theme }) => theme.colors.black};
text-decoration:none;
margin-right:19px;
border-bottom: 1px solid rgba(155, 149, 145, 0.5);
&:hover {
    border-color:transparent;
}
@media${({ theme }) => theme.media.small}{
    display:block;
    margin:0 auto 15px;
}
`

const PhoneLink = styled(NavLinks)`
    color: ${({ theme }) => theme.colors.blue};
    border-bottom: 1px solid rgba(72, 89, 240, 0.3);
    text-decoration:none;
    float:right;
    margin-right:0;
    position:relative;
    &:after {
        content:'';
        background: url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.99472 14.0413C11.4686 15.5681 13.2519 16.7469 15.2195 17.4949L17.8813 15.3319C17.9602 15.2764 18.0538 15.2467 18.1496 15.2467C18.2454 15.2467 18.339 15.2764 18.4179 15.3319L23.3603 18.5836C23.5479 18.6987 23.7067 18.8569 23.8242 19.0456C23.9417 19.2342 24.0146 19.4482 24.0372 19.6705C24.0598 19.8929 24.0315 20.1176 23.9544 20.3268C23.8774 20.5361 23.7537 20.7242 23.5933 20.8763L21.2774 23.2123C20.9458 23.5469 20.5381 23.7925 20.0909 23.9271C19.6437 24.0617 19.1708 24.0812 18.7145 23.9837C14.162 23.0236 9.96586 20.775 6.60567 17.4949C3.32004 14.1821 1.04641 9.96694 0.0605691 5.36067C-0.0368193 4.90186 -0.016493 4.42514 0.119578 3.97672C0.255649 3.52829 0.502851 3.12336 0.837226 2.80117L3.2378 0.436332C3.38635 0.280446 3.56752 0.160898 3.76773 0.0866382C3.96794 0.0123787 4.182 -0.0146673 4.3939 0.00752523C4.60579 0.0297178 4.81003 0.100574 4.99131 0.214788C5.17259 0.329002 5.32621 0.483614 5.44068 0.667048L8.73088 5.64906C8.78763 5.72729 8.81827 5.82207 8.81827 5.91943C8.81827 6.01679 8.78763 6.11157 8.73088 6.1898L6.5633 8.85024C7.31566 10.8192 8.48781 12.5925 9.99472 14.0413V14.0413Z' fill='%234859F0'/%3E%3C/svg%3E%0A") 50% 50% no-repeat;
        background-size:contain;
        width:25px;
        height:25px;
        display:block;
        position:absolute;
        top:50%;
        left:-30px;
        margin-top:-12px;
    }
    @media${({ theme }) => theme.media.small}{
        float:none;
        margin:0 auto 10px;
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
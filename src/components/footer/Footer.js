import React from 'react';

import styled from 'styled-components';

import FormSubscribe from '../formSubscribe/FormSubscribe';

const FooterContainer = styled.footer`
    max-width:1392px;
    margin:0 auto 0;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.bg_footer};
    border-radius: 16px 16px 0px 0px;
    @media${({ theme }) => theme.media.extraLarge} {
        max-width:970px;
    }
    @media${({ theme }) => theme.media.large} {
        max-width:750px;
    }
`
const FooterWrapper = styled.div`
    padding:37px 23px 13px;
`
const FooterColumn = styled.section`
   display:flex;
   justify-content:space-between;
   @media${({ theme }) => theme.media.medium} {
        display:block;
    }
    
`

const FooterNav = styled.div`
    max-width:720px;
    width:100%;
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    @media${({ theme }) => theme.media.extraLarge} {
        max-width:490px;
    }
    @media${({ theme }) => theme.media.large} {
        max-width:100%;
    }
    @media${({ theme }) => theme.media.small} {
        flex-direction:column;
    }
    
`
const FooterSubscr = styled.div`
    max-width:466px;
    width:100%;
    @media${({ theme }) => theme.media.extraLarge} {
        max-width:385px;
    }
    @media${({ theme }) => theme.media.large} {
        max-width:100%;
    }
`

const FooterNavBox = styled.nav`
    margin-bottom:20px;
`
const FooterNavHead = styled.h3`
    margin:0 0 15px;
    font-style: normal;
    font-weight: 700;
    font-size: 2em;
    line-height: 1.02em;
    color:  ${({ theme }) => theme.colors.footer_head};
    @media${({ theme }) => theme.media.small} {
        font-size:16px;
    }
`
const NavLink = styled.a`
    font-weight: 400;
    font-size: 1.6em;
    line-height: 1.02em;
    color: ${({ theme }) => theme.colors.white};
    margin-bottom:5px;
    display:table;
    text-decoration:none;
    &:hover {
        text-decoration:underline;
    }
    @media${({ theme }) => theme.media.small} {
        font-size:12px;
        display:inline-block;
        margin:0 10px 10px 0;
    }
`
const NavLinkPhone = styled.a`
    font-weight: 400;
    font-size: 1.6em;
    line-height: 1.02em;
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
    text-decoration:none;
    position:relative;
    margin:20px 0 0 25px;
    display:table;

    &:hover {
        text-decoration:none;
        border-bottom:0;
    }
    &:before {
        content:'';
        background: url("data:image/svg+xml,%3Csvg width='25' height='25' viewBox='0 0 25 25' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.99472 14.0413C11.4686 15.5681 13.2519 16.7469 15.2195 17.4949L17.8813 15.3319C17.9602 15.2764 18.0538 15.2467 18.1496 15.2467C18.2454 15.2467 18.339 15.2764 18.4179 15.3319L23.3603 18.5836C23.5479 18.6987 23.7067 18.8569 23.8242 19.0456C23.9417 19.2342 24.0146 19.4482 24.0372 19.6705C24.0598 19.8929 24.0315 20.1176 23.9544 20.3268C23.8774 20.5361 23.7537 20.7242 23.5933 20.8763L21.2774 23.2123C20.9458 23.5469 20.5381 23.7925 20.0909 23.9271C19.6437 24.0617 19.1708 24.0812 18.7145 23.9837C14.162 23.0236 9.96586 20.775 6.60567 17.4949C3.32004 14.1821 1.04641 9.96694 0.0605691 5.36067C-0.0368193 4.90186 -0.016493 4.42514 0.119578 3.97672C0.255649 3.52829 0.502851 3.12336 0.837226 2.80117L3.2378 0.436332C3.38635 0.280446 3.56752 0.160898 3.76773 0.0866382C3.96794 0.0123787 4.182 -0.0146673 4.3939 0.00752523C4.60579 0.0297178 4.81003 0.100574 4.99131 0.214788C5.17259 0.329002 5.32621 0.483614 5.44068 0.667048L8.73088 5.64906C8.78763 5.72729 8.81827 5.82207 8.81827 5.91943C8.81827 6.01679 8.78763 6.11157 8.73088 6.1898L6.5633 8.85024C7.31566 10.8192 8.48781 12.5925 9.99472 14.0413V14.0413Z' fill='%234859F0'/%3E%3C/svg%3E%0A") 50% 50% no-repeat;
        background-size:contain;
        width:18px;
        height:18px;
        display:block;
        position:absolute;
        top:50%;
        left:-25px;
        margin-top:-8px;
    }
    @media${({ theme }) => theme.media.small} {
        font-size:12px;
        margin:15px 0px 0px 25px
    }
`
const FooterPayIcons = styled.div`
    margin-top:47px;
    max-width:81px;
    img {
        width:100%;
        max-width:100%;
        height:auto;
    }
`
const FooterCopyright = styled.section`
    text-align:center;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6em;
    line-height: 1.02em;
    color: ${({theme}) => theme.colors.gray};
    margin-top:28px;
`

function Footer(props) {
    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterColumn>
                    <FooterNav>
                        <FooterNavBox>
                            <FooterNavHead>Helpful Links</FooterNavHead>
                            <NavLink href="#">Buyer’s Guides</NavLink>
                            <NavLink href="#">Calculators</NavLink>
                            <NavLink href="#">All Brands</NavLink>
                            <NavLink href="#">Catalog Updates</NavLink>
                        </FooterNavBox>
                        <FooterNavBox>
                            <FooterNavHead>Customer Services</FooterNavHead>
                            <NavLink href="#">Express Delivery</NavLink>
                            <NavLink href="#">Privacy Statement</NavLink>
                            <NavLink href="#">Terms of Use</NavLink>
                            <NavLink href="#">Pricing Policy</NavLink>
                            <NavLink href="#">Returns and Refunds</NavLink>
                            <NavLink href="#">Help and FAQ</NavLink>
                            <NavLink href="#">Return Points</NavLink>
                            <NavLink href="#">Returns and Orders</NavLink>
                        </FooterNavBox>
                        <FooterNavBox>
                            <FooterNavHead>Support</FooterNavHead>
                            <NavLink href="#">Contact Us</NavLink>
                            <NavLink href="#">FAQ</NavLink>
                            <NavLink href="#">Feedback</NavLink>
                            <NavLink href="#">Live Chat</NavLink>
                            <NavLink href="#">My Account</NavLink>
                            <NavLinkPhone href="tel:+(844) 434-672">+(844) 434-672</NavLinkPhone>
                        </FooterNavBox>
                    </FooterNav>

                    <FooterSubscr>
                        <FormSubscribe />
                        <FooterPayIcons>
                            <img src="../images/icons/ico_pay.png" />
                        </FooterPayIcons>
                    </FooterSubscr>
                </FooterColumn>
                <FooterCopyright>
                    © «Brand» 2022, All Rights Reserved
                </FooterCopyright>
            </FooterWrapper>
        </FooterContainer>
    );
}

export default Footer;
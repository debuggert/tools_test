import React from 'react';

import styled from 'styled-components';

const QicikOrder = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content:flex-end;
    @media${({ theme }) => theme.media.small} {
        position:fixed;
        bottom:0;
        left:0;
        rigth:0;
        background: ${({theme}) => theme.colors.white};
        justify-content:space-around;
        z-index:100;
        padding:5px;
        box-shadow: 0px 1px 17px -2px rgba(0,0,0,0.74);


    }
`;

const LinkIcon = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 1.6em;
    line-height: 1.15em;
    color:  ${({ theme }) => theme.colors.black};
    padding-left:0;
    text-decoration:none;
    display:flex;
    align-items:center;
    margin-left:16px;
    @media${({ theme }) => theme.media.small} {
        font-size:8px;
        flex-direction:column;
        margin:0 4px;
        text-align:center;
        min-width:43px;
    }
`
const Icon = styled.span`
    display:inline-block;
    width:30px;
    height:30px;
    position:relative;
    margin-right:9px;
    background:${({iconName = 'transparent'}) => 
        iconName == 'list' ? `url(../images/icons/ico_list.svg) 50% 50% no-repeat` : 
        iconName === 'account' ? `url(../images/icons/ico_user.svg) 50% 50% no-repeat` :
        iconName === 'quick' ? `url(../images/icons/ico_quick.svg) 50% 50% no-repeat` :
        iconName === 'cart' ? `url(../images/icons/ico_cart.svg) 50% 50% no-repeat` : 'transparent'
    };
    background-size:contain;
    img {
        width:100%;
        max-width:100%;
        height:auto;
    }
    @media${({ theme }) => theme.media.small} {
        width: 20px;
        height: 20px;
        margin:0 0 3px;
    }
`

const CartCounter = styled.span`
    position:absolute;
    top:-5px;
    right:-5px;
    display:block;
    background: rgba(72, 89, 240, 0.2);
    border-radius: 10px;
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 12px;
    color: ${({ theme }) => theme.colors.white};
    padding:6px 6px 4px;
    z-index:2;
    &:before {
        content:'';
        position:absolute;
        top:2px;
        left:2px;
        right:2px;
        bottom:2px;
        background: rgba(72, 89, 240, 0.99);
        border-radius: 10px;
        z-index:-1;
    }
    @media${({ theme }) => theme.media.small} {
        top:-3px;
        right:-7px;
        font-size:8px;
        line-height:8px;
    }
`

const QucikNav = () => {
    return (
        <QicikOrder>
            <LinkIcon href=""><Icon iconName="list" />Lists</LinkIcon>
            <LinkIcon href=""><Icon iconName="account" />Account</LinkIcon>
            <LinkIcon href=""><Icon iconName="quick" />Quick Order</LinkIcon>
            <LinkIcon href="">
                <Icon iconName="cart">
                   <CartCounter>32</CartCounter>
                </Icon>
                Cart
            </LinkIcon>
        </QicikOrder>
    );
};

export default QucikNav;
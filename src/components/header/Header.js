import React from 'react';
import styled, {css} from 'styled-components';
import SearchProduct from '../searchProduct/SearchProduct';
import Menu from './Menu';
import QucikNav from './QucikNav';

const HeaderBox = styled.header`
    max-width:1440px;
    margin:0 auto;
    padding:12px 24px 0;
    position:relative;
    z-index:100;
    @media${({ theme }) => theme.media.extraLarge} {
        max-width:970px;
        padding:12px 0 0;
    }
    @media${({ theme }) => theme.media.large} {
        max-width:770px;
        padding:10px 12px 0;
    }
    @media${({ theme }) => theme.media.small}{
        position:fixed;
        top:0;
        left:0;
        right:0;
        padding-bottom:5px;
        background:${({ theme }) => theme.colors.white};
        box-shadow: 0 2px 17px -2px rgba(0,0,0,0.74);
    }
`

const SmallNav = styled.nav`
    text-align:right;
    margin-bottom:13px;
`;

const Container = styled.div`
    margin-bottom:24px;
    display:flex;
    justify-content:space-between;

    @media${({ theme }) => theme.media.small} {
        margin:0;
    }
`
const ContentColumn = styled.div`
    width:50%;
    display: ${({display = 'block'}) => display };
    ${ ({display}) => display ? css`
    align-items:center` : ''};
    @media${({ theme }) => theme.media.small} {
        width:auto;
        // display:block;
    }
`

const LogoBox = styled.div`
    margin-right:58px;
    display:inline-block;
    @media${({ theme }) => theme.media.small} {
        margin:0 20px 0 0;
        max-width:58px;
        svg{
            width:100%;
        }
    }
`

const SmallLinks = styled.a`
font-style: normal;
font-weight: 400;
font-size: 1.6em;
line-height: 1.02em;
color: ${({ theme }) => theme.colors.blue};
border-bottom: 1px solid rgba(72, 89, 240, 0.3);
text-decoration:none;
display:inline-block;
margin-left:20px;
&:hover {
    border-bottom:0;
}
`


function Header(props) {
    return (
        <HeaderBox>
            <SmallNav>
                <SmallLinks href="#" target="_blank">Request a Sample</SmallLinks>
                <SmallLinks href="#">Help</SmallLinks>
                <SmallLinks href="#">Contact</SmallLinks>
            </SmallNav>
            <Container>
                <ContentColumn display="flex">
                    <LogoBox>
                        <a href="/">
                            <svg width="103" height="29" viewBox="0 0 103 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.338778 28V1.09091H6.02805V23.3093H17.5643V28H0.338778ZM45.0121 14.5455C45.0121 17.4799 44.4558 19.9763 43.3434 22.0348C42.2397 24.0933 40.7331 25.6656 38.8235 26.7518C36.9227 27.8292 34.7854 28.3679 32.4116 28.3679C30.0202 28.3679 27.8742 27.8248 25.9734 26.7386C24.0726 25.6525 22.5703 24.0801 21.4666 22.0217C20.3629 19.9632 19.8111 17.4711 19.8111 14.5455C19.8111 11.611 20.3629 9.11458 21.4666 7.05611C22.5703 4.99763 24.0726 3.42969 25.9734 2.35227C27.8742 1.2661 30.0202 0.72301 32.4116 0.72301C34.7854 0.72301 36.9227 1.2661 38.8235 2.35227C40.7331 3.42969 42.2397 4.99763 43.3434 7.05611C44.4558 9.11458 45.0121 11.611 45.0121 14.5455ZM39.244 14.5455C39.244 12.6446 38.9593 11.0417 38.3899 9.73651C37.8293 8.43134 37.0366 7.44153 36.0117 6.76705C34.9869 6.09257 33.7868 5.75533 32.4116 5.75533C31.0363 5.75533 29.8363 6.09257 28.8114 6.76705C27.7866 7.44153 26.9895 8.43134 26.4201 9.73651C25.8595 11.0417 25.5792 12.6446 25.5792 14.5455C25.5792 16.4463 25.8595 18.0492 26.4201 19.3544C26.9895 20.6596 27.7866 21.6494 28.8114 22.3239C29.8363 22.9983 31.0363 23.3356 32.4116 23.3356C33.7868 23.3356 34.9869 22.9983 36.0117 22.3239C37.0366 21.6494 37.8293 20.6596 38.3899 19.3544C38.9593 18.0492 39.244 16.4463 39.244 14.5455ZM67.0695 9.78906C66.8856 9.14962 66.6272 8.58463 66.2943 8.0941C65.9614 7.59482 65.5541 7.17436 65.0724 6.83274C64.5993 6.48236 64.0563 6.2152 63.4431 6.03125C62.8387 5.8473 62.1686 5.75533 61.4328 5.75533C60.0576 5.75533 58.8488 6.09695 57.8064 6.78018C56.7728 7.46342 55.9669 8.45762 55.3888 9.76278C54.8106 11.0592 54.5216 12.6446 54.5216 14.5192C54.5216 16.3937 54.8063 17.9879 55.3756 19.3018C55.945 20.6158 56.7509 21.6187 57.7932 22.3107C58.8356 22.994 60.0663 23.3356 61.4854 23.3356C62.773 23.3356 63.8723 23.1078 64.7833 22.6523C65.703 22.1881 66.4038 21.5355 66.8856 20.6946C67.3761 19.8537 67.6214 18.8595 67.6214 17.712L68.7776 17.8828H61.8401V13.5994H73.1004V16.9893C73.1004 19.3544 72.6011 21.3866 71.6025 23.0859C70.604 24.7765 69.2287 26.0817 67.4768 27.0014C65.7249 27.9124 63.719 28.3679 61.4591 28.3679C58.9363 28.3679 56.7202 27.8117 54.8106 26.6992C52.9011 25.578 51.412 23.9882 50.3433 21.9297C49.2834 19.8625 48.7535 17.4098 48.7535 14.5717C48.7535 12.3906 49.0688 10.446 49.6995 8.73792C50.3389 7.02107 51.2324 5.567 52.3799 4.37571C53.5274 3.18442 54.8632 2.27782 56.3873 1.65589C57.9115 1.03397 59.5626 0.72301 61.3408 0.72301C62.865 0.72301 64.284 0.946377 65.5979 1.39311C66.9118 1.83108 68.0769 2.45301 69.093 3.25888C70.1178 4.06475 70.9543 5.02391 71.6025 6.13636C72.2507 7.24006 72.6668 8.45762 72.8508 9.78906H67.0695ZM102.102 14.5455C102.102 17.4799 101.546 19.9763 100.433 22.0348C99.3295 24.0933 97.8229 25.6656 95.9134 26.7518C94.0125 27.8292 91.8752 28.3679 89.5014 28.3679C87.1101 28.3679 84.964 27.8248 83.0632 26.7386C81.1624 25.6525 79.6602 24.0801 78.5565 22.0217C77.4528 19.9632 76.9009 17.4711 76.9009 14.5455C76.9009 11.611 77.4528 9.11458 78.5565 7.05611C79.6602 4.99763 81.1624 3.42969 83.0632 2.35227C84.964 1.2661 87.1101 0.72301 89.5014 0.72301C91.8752 0.72301 94.0125 1.2661 95.9134 2.35227C97.8229 3.42969 99.3295 4.99763 100.433 7.05611C101.546 9.11458 102.102 11.611 102.102 14.5455ZM96.3338 14.5455C96.3338 12.6446 96.0491 11.0417 95.4798 9.73651C94.9192 8.43134 94.1264 7.44153 93.1016 6.76705C92.0767 6.09257 90.8767 5.75533 89.5014 5.75533C88.1262 5.75533 86.9261 6.09257 85.9013 6.76705C84.8764 7.44153 84.0793 8.43134 83.5099 9.73651C82.9493 11.0417 82.669 12.6446 82.669 14.5455C82.669 16.4463 82.9493 18.0492 83.5099 19.3544C84.0793 20.6596 84.8764 21.6494 85.9013 22.3239C86.9261 22.9983 88.1262 23.3356 89.5014 23.3356C90.8767 23.3356 92.0767 22.9983 93.1016 22.3239C94.1264 21.6494 94.9192 20.6596 95.4798 19.3544C96.0491 18.0492 96.3338 16.4463 96.3338 14.5455Z" fill="#212121"/>
                            </svg>
                        </a>
                    </LogoBox>
                    <SearchProduct/>
                </ContentColumn>
                <ContentColumn>
                    <QucikNav/>
                </ContentColumn>
            </Container>
            <Container>
                <Menu/>
            </Container>
        </HeaderBox>
    );
}

export default Header;
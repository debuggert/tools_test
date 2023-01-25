import styled from "styled-components";

const ButtonLiveChat = styled.a`
    padding:15px 75px 15px 24px;
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.blue};
    box-shadow: 0px 4px 11px rgba(33, 33, 33, 0.35);
    border-radius: 25px;
    position:relative;
    display:block;
    max-width:181px;
    text-decoration:none;
    transition:0.4s;
    &:before {
        content:'';
        background: url("data:image/svg+xml,%3Csvg width='28' height='26' viewBox='0 0 28 26' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.41946 2.39122L25.2691 13L2.41945 23.6088L7.25953 13.4965L7.49716 13L7.25953 12.5035L2.41946 2.39122Z' stroke='white' stroke-width='2.3'/%3E%3Cline x1='7' y1='12.85' x2='24' y2='12.85' stroke='white' stroke-width='2.3'/%3E%3C/svg%3E%0A") 50% 50% no-repeat;
        background-size:contain;
        width:28px;
        height:26px;
        position:absolute;
        right:24px;
        top:50%;
        margin-top:-13px;
    }
    &:hover {
        transform:scale(1.03,1.03);
    }
`

export default ButtonLiveChat;
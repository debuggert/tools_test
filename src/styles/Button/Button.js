import styled from "styled-components";


const Button = styled.button`
    text-align:center;
    background: ${({ theme }) => theme.colors.blue};
    border-radius: 16px;
    font-style: normal;
    font-weight: 700;
    font-size: 2.2em;
    line-height: 65px;
    color: ${({ theme }) => theme.colors.white};
    border:0;
    width:100%;
    display:block;
    max-width:320px;
    margin-top:40px;
    transition:0.4s;
    cursor:pointer;
    &:hover {
        transform:scale(1.03,1.03);
    }
    
    @media${({ theme }) => theme.media.extraLarge} {
        max-width:250px;
        line-height:55px;
    }
    @media${({ theme }) => theme.media.large} {
        max-width:210px;
        line-height:50px;
    }
    @media${({ theme }) => theme.media.small} {
        font-size:14px;
        line-height:50px;
        max-width:240px;
    }
`
export default Button;
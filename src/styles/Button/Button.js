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
    displya:block;
    max-width:320px;
    margin-top:40px;

`
export default Button;
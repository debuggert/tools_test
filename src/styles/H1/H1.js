import styled from "styled-components";

const H1 = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 4.6em;
    line-height: 1.2em;
    margin-bottom: ${({mrgb = 0})=> mrgb}px;
    @media${({ theme }) => theme.media.small} {
        font-size:24px;
    }
`

export default H1;
import styled from "styled-components";

const Container = styled.section`
    max-width:1392px;
    margin:${({mrgt = 0})=> mrgt}px auto ${({mrgb = 75})=> mrgb}px;
    
    @media${({ theme }) => theme.media.extraLarge} {
        max-width:970px;
    }

    @media${({ theme }) => theme.media.large} {
        max-width:770px;
        padding:0 12px
    }
`

//@media${({ theme }) => theme.media.extraLarge} {}

export default Container;
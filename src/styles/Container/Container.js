import styled from "styled-components";

const Container = styled.section`
    max-width:1440px;
    margin:${({mrgt = 0})=> mrgt}px auto ${({mrgb = 75})=> mrgb}px;;
`

export default Container;
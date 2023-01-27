import styled from "styled-components";

const H2 = styled.h2`
    font-style: normal;
    font-weight: 700;
    font-size: 4.6em;
    line-height: 1.2em;

    @media${({ theme }) => theme.media.small} {
        font-size:22px;
    }
`

export default H2;
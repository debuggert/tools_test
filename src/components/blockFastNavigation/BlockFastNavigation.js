import styled from "styled-components";

const Block3Column = styled.section`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%;
    max-width:1100px;
    margin:0 auto;
    @media${({ theme }) => theme.media.small} {
        display:block;
    }
`

const IconBox = styled.a`
    max-width:290px;
    text-decoration:none;
    transition:0.4s;
    &:hover {
        transform:scale(1.02,1.02);
    }
    @media${({ theme }) => theme.media.small} {
        margin:0 auto 30px;
        max-width:200px;
        display:block;
    }
`
const IconBoxImg = styled.div`
    display:flex;
    align-items:center;
    justify-content:center;
    margin-bottom:25px;
`
const IconBoxText = styled.h3`
    font-style: normal;
    font-weight: 700;
    font-size: 2.5em;
    line-height: 1.02em;
    text-align: center;
    color: ${({ theme }) => theme.colors.font};
    margin:0 auto;
`
const IcobBoxImgFix = styled.div`
    max-width:${({mw = 290}) => mw }px;
    img {
        max-width:100%;
        width:100%;
        height:auto;
    }

`

const BlockFastNavigation = () =>{
    return(
        <Block3Column>
            <IconBox href="#">
                <IconBoxImg>
                    <img src="../images/icons/ico_catalog.svg"/>
                </IconBoxImg>
                <IconBoxText>Products Catalog</IconBoxText>
            </IconBox>
            <IconBox href="#">
                <IconBoxImg>
                    <img src="../images/icons/ico_support.svg"/>
                </IconBoxImg>
                <IconBoxText>24/7 Customer Support</IconBoxText>
            </IconBox>
            <IconBox href="#">
                <IconBoxImg>
                    <IcobBoxImgFix mw="57">
                        <img src="../images/icons/ico_ideas.png"/>
                    </IcobBoxImgFix>
                </IconBoxImg>
                <IconBoxText>Products Catalog</IconBoxText>
            </IconBox>
        </Block3Column>
    );
}

export default BlockFastNavigation;
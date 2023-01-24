import styled from "styled-components";

const Block3Column = styled.section`
    display:flex;
    align-items:center;
    justify-content:space-around;
    width:100%;
    max-width:1100px;
    margin:0 auto;
`

const IconBox = styled.a`
    max-width:290px;
    text-decoration:none;
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
    font-size: 25px;
    line-height: 30px;
    text-align: center;
    color: ${({ theme }) => theme.colors.font};
    margin:0 auto;
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
                    <img src="../images/icons/ico_ideas.svg"/>
                </IconBoxImg>
                <IconBoxText>Products Catalog</IconBoxText>
            </IconBox>
        </Block3Column>
    );
}

export default BlockFastNavigation;
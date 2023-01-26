import React from 'react';
import styled from 'styled-components';

import H2 from '../../styles/H2/H2';
import Button from '../../styles/Button/Button';

const RounderBox = styled.article`
  position:relative;
  height:682px;
  width:100%;
  background: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  overflow:hidden;
  display:flex;
  align-items:center;
  @media${({ theme }) => theme.media.extraLarge} {
    height:590px;
  }
`
const RounderBoxWrapper = styled.div`
  padding:75px;
  position:relative;
  z-index:5;
  width:100%;
  max-width:730px;
`
const RounderBoxImg = styled.div`
  position:absolute;
  top:0;
  right:0;
  bottom:0;
  img {
    height:100%;
  }
  &:before {
    content:'';
    position:absolute;
    left:0;
    top:0;
    bottom:0;
    width:70%;
    background: linear-gradient(90deg, #FFFFFF 7.65%, rgba(255, 255, 255, 0.92) 23.96%, rgba(255, 255, 255, 0) 73.83%);
    @media${({ theme }) => theme.media.extraLarge} {
      width:95%;
    }
  }
`

const P = styled.p`
  margin:40px 0 0;
  font-size:2.2em;
  line-height:1.15em
`

export default function BlockWithTextAndImg() {
  return (
    <RounderBox>
      <RounderBoxImg>
        <img src="../images/main/bg_blockWithTextAndImg.jpg" />
      </RounderBoxImg>
      <RounderBoxWrapper>
        <H2>Large Inventory Of&nbsp;Power Tools &amp;&nbsp;Accessories</H2>
        <P>Find the Aluminum and Stainless Steel items for your project in&nbsp;stock and ready to&nbsp;ship today! Avoid project delays and long lead times in&nbsp;a&nbsp;challenging supply chain for specialty metals and non-ferrous items. We&nbsp;are well stocked and here to&nbsp;serve you with guided support.</P>
        <Button>Shop Now</Button>
      </RounderBoxWrapper>
    </RounderBox>
  )
}

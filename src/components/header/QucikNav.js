import React from 'react';

import styled from 'styled-components';
import LinkIcon from '../../styles/LinkIcon/LinkIcon';

const QicikOrder = styled.div`
    display:flex;
`;


const QucikNav = () => {
    return (
        <QicikOrder>
            <LinkIcon href="">Lists</LinkIcon>
            <LinkIcon href="">Account</LinkIcon>
            <LinkIcon href="">Quick Order</LinkIcon>
            <LinkIcon href="">Cart</LinkIcon>
        </QicikOrder>
    );
};

export default QucikNav;
import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';


const SearchBox = styled.div`
    position:relative;
    width:100%;
    max-width:480px;
`;
const SearchIco = styled.div`
    position:absolute;
    top:7px;
    left:12px;
    width:31px;
    height:30px;
    background: url("data:image/svg+xml,%3Csvg width='31' height='30' viewBox='0 0 31 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect x='21.354' y='20' width='11.8561' height='2' rx='1' transform='rotate(42.6122 21.354 20)' fill='%239B9591'/%3E%3Ccircle cx='12.5' cy='12.5' r='11.5' stroke='%239B9591' stroke-width='2'/%3E%3C/svg%3E%0A") 50% 50% no-repeat;
    background-size:cover;  
    z-index:2
`;
const SearchInput = styled.input`
    width:100%;
    padding:12px 12px 12px 54px;
    font-style: normal;
    font-weight: 400;
    font-size: 1.6em;
    line-height: 1.15em;
    color:  ${({ theme }) => theme.colors.gray};
    background:  ${({ theme }) => theme.colors.input};
    border-radius: 8px;
    border:0;
    outline:none;
`

const SearchProduct = () => {
    const [searchOpen, setSearchOpen] = useState(true);
    function toggleState() {
        searchOpen ? setSearchOpen(false) : setSearchOpen(true);
    }
    return (
        <SearchBox className={searchOpen ? 'show' : ''}>
            <SearchIco onClick={() => {toggleState()}}/>
            <SearchInput placeholder='Product SKU, Name…'/>
        </SearchBox>
    );
};

export default SearchProduct;
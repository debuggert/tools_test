import styled from "styled-components";

const SliderButton = styled.button`
    display:block;
    width: 46px;
    height: 46px;
    background:  ${({ theme }) => theme.colors.input};
    border-radius:50%;
    border:0;
    position:relative;
    cursor:pointer;
    transition:0.4s;
    &:hover {
        transform:scale(1.1,1.1);
    }
    &:after {
        content:'';
        width:16px;
        height:16px;
        position:absolute;
        top:50%;
        left:50%;
        background:url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_1_438)'%3E%3Cpath d='M13 0.978586C13.0002 1.10713 12.9734 1.23443 12.9212 1.35318C12.869 1.47193 12.7924 1.57979 12.6958 1.67056L6.50707 7.50279L12.6958 13.335C12.8879 13.5191 12.9951 13.7672 12.994 14.0254C12.9929 14.2835 12.8836 14.5308 12.6899 14.7134C12.4961 14.8959 12.2337 14.9989 11.9598 15C11.6858 15.001 11.4225 14.9 11.2272 14.719L4.30414 8.19477C4.1094 8.01124 4 7.76233 4 7.50279C4 7.24326 4.1094 6.99435 4.30414 6.81082L11.2272 0.286612C11.3725 0.149757 11.5575 0.0565592 11.759 0.0188023C11.9604 -0.0189546 12.1692 0.000425002 12.3589 0.0744912C12.5487 0.148558 12.7109 0.273986 12.825 0.434911C12.9391 0.595838 13 0.785038 13 0.978586Z' fill='%23212121'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_1_438'%3E%3Crect width='16' height='16' fill='white' transform='translate(16) rotate(90)'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E%0A") 50% 50% no-repeat;
        margin:-8px 0 0 -8px;
        display:block;
        transform: ${(props) => props.prev ? 'rotate(0)' : 'rotate(180deg)'}
    }


`

export default SliderButton;
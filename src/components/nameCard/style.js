import styled from "styled-components";


export const Div = styled.div`
    border-radius: 30px;
    background: ${props => props.background? props.background : '#666'};
    display:flex;
    position:relative;
    padding:10px;
    align-items:center
`

export const NameIcon = styled.div`
    position:absolute;
    right:15px;
    top:50%;
    transform: translateY(-50%);
    transition: all ease-in-out 300ms;
    width:30px;
    height:30px;
    border-radius:50%;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    &:hover{
        background:rgba(0,0,0,.2)
    }
`
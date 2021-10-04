import styled from "styled-components";

export const Div = styled.div`
    background: #000;
    padding:30px;
    box-shadow:1px 2px 20px rgba(0,0,0,.05);
    width:400px;
    border-radius:20px;
    display: ${props => props.display ? props.display : 'none'};
    position: fixed;
    top:30px;
    right: 100px;
`

export const FlexDiv = styled.div`
    display: flex;
    justify-content:${props => props.justify ? props.justify : "space-between"};
    align-items:center;
    border-bottom: ${props => props.borderBottom ? props.borderBottom : null}
`

export const CloseBtn = styled.div`
    width: 25px;
    height:25px;
    border-radius:5px;
    background:#f9f9f9;
    color:#000;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    transition: all ease-in-out 300ms;
    &:hover{
        background:#666;
        color:#fff;
    }
`

export const PatientCard = styled.div`
    background: ${props => props.background ? props.background : '#f9f9f9'};
    padding:15px;
    border-radius:15px;
    display:flex;
    justify-content:space-between;
    margin-top:15px;
    margin-bottom:10px;
`

export const SmallDiv = styled.div`
    display:flex;
    margin: 10px 0;
    align-items:center;
`

export const Button = styled.button`
    background: ${props => props.background ? props.background : '#666'};
    color: ${props => props.color ? props.color : '#fff'};
    padding:5px 10px;
    cursor:pointer;
    margin-right: 15px;
    border:none;
    border-radius:5px;
    transition: all ease-in-out 300ms;
    &:hover{
        opacity:.75
    }

`

export const IconDiv = styled.div`
    width: 35px;
    height: 35px;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all ease-in-out 300ms;
    border-radius:50%;
    &:hover{
        background: rgba(0,0,0,.05);
    }
`
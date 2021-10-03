import styled from "styled-components";


export const UserCardDiv = styled.div`
    background: #fff;
    border-radius: 10px;
    padding:5px;
    display:flex;
    justify-content: center;
    align-items: center;
    width:100%;
`

export const FlexChild = styled.div`
    flex: ${props=> props.flex ? props.flex : "1"};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding:5px;
`
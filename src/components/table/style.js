import styled from "styled-components";


export const TableDiv  = styled.table`
    padding: 10px;
    width:100%;
    border:none;
    width: 100%;
    `

export const TheadDiv = styled.thead`
    padding:5px;
    background: #666;
    color:#fff;
    text-align: left;
    margin-bottom: 10px;
    border-radius: 15px;
    width:100%;
    display: flex;
    justify-content: space-around;
    width:100%;
    `

export const TrDiv = styled.tr`
    display: flex;
    width:100%;
    align-items: center;
    border-bottom:solid 1px #eeeeee;
`

export const TdDiv = styled.td`
    border-right:solid 1px #eeeeee;
    padding:10px;
    min-width: 270px;
    height:${props => props.height ? props.height : '150px'};
    cursor:pointer;
    transition:all ease-in-out 200ms;
    position:relative;

    &:hover::after {
        content: ${"after"};
    }

    &:hover{
        background:#fafafa;
    }
`

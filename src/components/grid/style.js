import styled from "styled-components";


export const Main = styled.div`
    width:100%;
    height:100%;
    position: relative;
`

export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
`
export const GridChild = styled.div`
    border-right:solid 1px #eeeeee;
    border-bottom:solid 1px #eeeeee;
    padding:10px;
    width: 200px;
    height:100px;
    cursor:pointer;
    transition:all ease-in-out 200ms;

    &:hover{
        background:#fafafa;
    }
`


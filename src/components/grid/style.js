import styled from "styled-components";


export const Main = styled.div`
    width:100%;
    height:100%;
    position: relative;
`

export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.count ? props.count : '5'}, 1fr);
`
export const GridChild = styled.div`
    border-right:solid 1px #eeeeee;
    border-bottom:solid 1px #eeeeee;
    padding:10px;
    min-width: 270px;
    height:${props => props.height ? props.height :'150px'};
    cursor:pointer;
    transition:all ease-in-out 200ms;
    &::active{
        background: #fafafa;}

    &:hover{
        background:#fafafa;
    }
`


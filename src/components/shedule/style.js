import styled from 'styled-components'


export const Div = styled.div`
    background: ${props => props.background ? props.background : '#FCFFE7'};
    color: ${props => props.color ? props.color : '#67760E'};
    display:flex;
    justify-content: space-between;
    align-items: center;
    padding:10px;
    border-radius: 10px;

    .icon{
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display:flex;
        justify-content:center;
        align-items:center;
        transition: all ease-in-out 300ms;
        &:hover{
            background:rgba(0, 0, 0,.15);
            transform: rotate(180deg);
        }
        
    }
`


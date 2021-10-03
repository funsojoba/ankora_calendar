import styled from 'styled-components'

export const CircleDiv = styled.div`
    width: ${props => props.width ? props.width : '100px'};
    height: ${props => props.width ? props.width : '100px'};
    background: url(${props => props.background ? props.background : '100px'});
    background-position: center;
    background-size:cover;
    border-radius: 50%;
`
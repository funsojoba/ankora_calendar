import styled from "styled-components";


const H4Div = styled.h4`
    color:${props => props.color ? props.color : '#666666'};
    text-align: ${props => props.align ? props.align : 'left'};
    justify-content:flex-start;
    margin-bottom: ${props => props.mb ? props.mb : '5px'};
    display:inline-block;
    font-weight: ${props => props.weight ? props.weight : 'normal'};
`

const H4 = ({ children, color, align, mb, weight }) => {
    return <H4Div
        align={align}
        color={color}
        mb={mb}
        weight={weight}
    >{children}</H4Div>
}

export default H4
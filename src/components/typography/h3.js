import styled from "styled-components";


const H5Div = styled.h3`
    color:${props => props.color ? props.color : '#666666'};
    text-align: ${props => props.align ? props.align : 'left'};
    justify-content:flex-start;
    margin-bottom: ${props => props.mb ? props.mb : '5px'};
    display:inline-block;

`

const H3 = ({ children, color, align, mb }) => {
    return <H5Div
        align={align}
        color={color}
        mb={mb}
    >{children}</H5Div>
}

export default H3
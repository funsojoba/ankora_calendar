import styled from "styled-components";


const SmallDiv = styled.div`
    color:${props => props.color ? props.color : '#666666'};
    text-align: left;
    display:flex;
    justify-content:flex-start;
    margin-bottom: ${props => props.mb ? props.mb : '10px'};

`

const Small = ({children, mb})=>{
    return <SmallDiv mb={mb}>{children}</SmallDiv>
}

export default Small
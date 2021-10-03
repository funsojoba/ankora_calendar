import styled from "styled-components";


const SmallDiv = styled.div`
    color:${props => props.color ? props.color : '#666666'};
    text-align: left;
    display:flex;
    justify-content:flex-start;
    margin-bottom: 10px;

`

const Small = ({children})=>{
    return <SmallDiv>{children}</SmallDiv>
}

export default Small
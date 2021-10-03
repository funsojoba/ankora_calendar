import { Link } from "react-router-dom";
import styled from 'styled-components'


const LinkDiv = styled.div`
    a{
        text-decoration:none;
        display:inline-block;
        color:${props => props.color ? props.color : "#666"}
    }
`

const MyLink = ({to, children, color})=>{
    return <LinkDiv color={color}>
        <Link to={to}>{children}</Link>
    </LinkDiv>
}

export default MyLink
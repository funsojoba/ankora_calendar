import styled from 'styled-components'
import Img from '../image'


const LogoDiv = styled.div`
    width: 100px;
`


const Logo = ()=>{
    return <LogoDiv>
        <Img src='https://res.cloudinary.com/ddl2pf4qh/image/upload/v1633283857/Ankora/Logo_zkrkb5.png'
            alt='ankora'
            loading='lazy' />
    </LogoDiv>
}

export default Logo
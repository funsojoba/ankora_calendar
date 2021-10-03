import styled from 'styled-components'

const ImgDiv = styled.img`
    width: 100%
`

const Img = ({src, alt, loading})=>{
    return <ImgDiv 
                src={src}
                alt={alt}
                loading={loading}
    />
}

export default Img
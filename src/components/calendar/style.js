import styled from 'styled-components'


export const MainDiv = styled.div`
    background: #fff;
    padding: 20px;
    border-radius: 20px;
    flex:1;
    height: 100vh;
    overflow: scroll;
    position:relative;
`

export const GridContainer = styled.div`
    width:100%;
    height:100%;
    overflow:scroll;
    &::scrollbar {
        display: none;
    }
`
import styled from 'styled-components'
import DayWeekToggle from './dayWeekToggle'
import H3 from '../typography/h3'
import H5 from '../typography/h5'


const HeaderDiv = styled.div`
    display:flex;
    border-bottom: solid 1px #f9f9f9;
`

const HeaderChild = styled.div`
    flex: ${props => props.flex ? props.flex : 1};
    display:flex;
    align-items: ${props => props.align ? props.align : 'center'};
    justify-content: ${props => props.justify ? props.justify : 'center'}
`

const Icons = styled.div`
    background:#f9f9f9;
    width:30px;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    border-radius:50%;
    cursor:pointer;
`


const Header = ()=>{
    const date = new Date()
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()


    return <HeaderDiv>
        <HeaderChild justify='space-around'>
            <Icons>
                <i className="fas fa-chevron-left"></i>
            </Icons>
            <Icons>
                <i className="fas fa-chevron-right"></i>
            </Icons>
        </HeaderChild>
        <HeaderChild flex="3" justify="flex-start" align="flex-end">
                <H3>{day} {month} {year}</H3> &nbsp;
                <H5>Today</H5>
        </HeaderChild>

        <HeaderChild>
            <DayWeekToggle />
        </HeaderChild>
    </HeaderDiv>
}

export default Header
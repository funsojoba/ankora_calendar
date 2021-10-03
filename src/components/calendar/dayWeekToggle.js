import styled from "styled-components";
import {useState} from 'react'

const Wrapper = styled.div`
    background:#F9F9F9;
    border-radius:15px;
    display:flex;
    padding:5px;
`

const Content = styled.div`
    padding:10px;
    background: ${props => props.background ? props.background : null};
    color: ${props => props.color ? props.color : '#666'};
    cursor:pointer;
    flex:1;
    border-radius: 10px;
    transition: all ease-in-out 300ms;
`

const DayWeekToggle = ()=>{

    const [isDay, setIsDay] = useState(true)
    const [isWeek, setIsWeek] = useState(false)

    const setWeekToggle = ()=>{
        setIsWeek(true)
        setIsDay(false)
    }
    const setDayToggle = ()=>{
        setIsWeek(false)
        setIsDay(true)
    }

    return <Wrapper>
        <Content 
            onClick={setDayToggle} 
            background={isDay && '#fff'}
            color={isDay && "#000"}
            >Day</Content>
        <Content 
            onClick={setWeekToggle} 
            background={isWeek && '#fff'}
            color={isWeek && "#000"}
             >Week</Content>
    </Wrapper>

}

export default DayWeekToggle
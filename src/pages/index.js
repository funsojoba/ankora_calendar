import SideBar from "../components/sideBar"
import Calendar from "../components/calendar"

import { BodyDiv } from './style'


const Home = ()=>{
    return <BodyDiv>
        <SideBar />
        <Calendar />
    </BodyDiv>
}

export default Home
import { MainDiv, GridContainer } from "./style";
import Header from "./header";
import Grid from "../grid/index";



const Calendar = ()=>{

    

    return <MainDiv>
            <Header />
            <GridContainer>
                <Grid />
            </GridContainer>
            
           
    </MainDiv>
}

export default Calendar
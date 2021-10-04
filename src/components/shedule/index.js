import H3 from "../typography/h3";
import Small from "../typography/small"
import { Div } from "./style";


const Schedule = ({event, patient})=>{
    return <Div>
        <H3 weight="bold" mb="0">{event}</H3>
        <Small mb="0">{patient}</Small>
        <div className="icon">
            <i className="fas fa-chevron-up"></i>
        </div>
    </Div>
}

export default Schedule

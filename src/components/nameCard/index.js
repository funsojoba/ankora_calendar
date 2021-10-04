import { Div, NameIcon } from "./style";
import Circle from "../circle";
import H4 from "../typography/h4";

const NameCard = ({name, image, background})=>{
    return <Div background={background}>
        <Circle width="30px" background={image} /> &nbsp;
        <H4 color="#000">{name}</H4>
        <NameIcon><i className="fas fa-ellipsis-v"></i></NameIcon>
    </Div>
}

export default NameCard

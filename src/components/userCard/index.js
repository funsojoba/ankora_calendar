import { UserCardDiv, FlexChild } from "./style";
import Circle from "../circle";
import MyLink from "../myLink";
import H4 from "../typography/h4";
import H5 from "../typography/h5";


const UserCard = ({image, name, clinic})=>{
    return <UserCardDiv>
        <FlexChild >
            <Circle width="50px"
                background={image}
            />
        </FlexChild>

        <FlexChild flex="3">
            <H4 weight="bold" mb="0">{clinic}</H4>
            <H5>{name}</H5>
            <MyLink to="/" color="#F97B5C">View Profile</MyLink>
        </FlexChild>
    </UserCardDiv>
}

export default UserCard
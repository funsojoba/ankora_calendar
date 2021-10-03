import { ListDiv } from "./style"

const List = ({icon, title, active})=>{
    return <ListDiv active={active}>
        <div>{icon}</div> &nbsp;
        <div>{title}</div>
    </ListDiv>
}

export default List
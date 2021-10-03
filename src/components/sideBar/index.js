import { SideBarDiv } from "./style";
import Logo from "../logo";
import List from "./lists";
import Small from "../typography/small";
import UserCard from "../userCard";


const SideBar = ()=>{
    return <SideBarDiv>
        <Logo />
        <div>
            <div>
                <Small>Quick Actions</Small>
                <List
                    icon={<i className="fas fa-search"></i>}
                    title="Search"/>
                <List
                    icon={<i className="fas fa-plus"></i>}
                    title="Add a New Patient"/>
            </div>
            <div>
                <Small>Manage</Small>
                <List
                    active
                    icon={<i className="far fa-calendar"></i>}
                    title="Calendar"/>
                <List
                    icon={<i className="fas fa-user-friends"></i>}
                    title="Manage Patients"/>
                <List
                    icon={<i className="fas fa-cog"></i>}
                    title="Settings"/>
            </div>
        </div>
        <UserCard 
            image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80"
            name="Marvin Tunji-ola"
            clinic="Acme Clinic, Inc."
        />
    </SideBarDiv>
}

export default SideBar
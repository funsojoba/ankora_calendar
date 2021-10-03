import { MainDiv } from "./style";
import NameCard from "../nameCard";
import Header from "./header";
import Form from "../form";
import { useState } from "react";


const Calendar = ()=>{

    const [openForm, setOpenForm] = useState(false)

    const closeForm = ()=>{
            setOpenForm(false)
            console.log(openForm)
    }

    const openFormDiv = ()=>{
        setOpenForm(true)
    }

    return <MainDiv>
            <Header />
            <NameCard 
            background="#D3E5FF"
            name="Davi K."
            image="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"
            />

            <Form display={openForm && 'block'} close={closeForm} />
    </MainDiv>
}

export default Calendar
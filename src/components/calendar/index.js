import { MainDiv } from "./style";
import NameCard from "../nameCard";
import Header from "./header";
import Form from "../form";
import Appointment from "../appointment"
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

            <Appointment
                time="20 Aug, 2021 8:30am  - 20 Aug, 2020 9:30am "
                patient="Arnold Ronald"
                doctor="Dr Mayowa Afolabi"
                title="Full Checkup"
                patientCardBackground="#FFF1D6"
                patientImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                doctorImage="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
             />
            <Form display={openForm && 'block'} close={closeForm} />
    </MainDiv>
}

export default Calendar
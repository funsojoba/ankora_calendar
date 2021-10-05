import { Main, FormDiv, FormControl, FlexDiv, Label, CloseBtn, InputSelect } from './style'
import NameCard from "../nameCard"
import Input from '../input'
import Button from '../button'
import H4 from '../typography/h4'

import Appointment from '../appointment'
// import Schedule from '../shedule'
import { useState } from 'react'
import hours from './hours'
import { Table, Tr, Td } from '../table'
import { time } from './timeOption'

const Grid = () => {
    const doctors = [
        { id: 0, name: 'Marvin T.', img:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'},
        { id: 1, name: 'Mayowa A.', img:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80'},
        { id: 2, name: 'Clement K', img:'https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg'},
        { id: 3, name: 'Philip B.', img:'https://preview.keenthemes.com/metronic-v4/theme/assets/pages/media/profile/profile_user.jpg'},
        { id: 4, name: 'Steven S.', img:'https://htmlstream.com/preview/unify-v2.6/assets/img-temp/400x450/img5.jpg'}
    ]
    const colors = ['#D3E5FF', '#D3FFD5', '#FFD3D9', '#E1D3FF', '#FFE8D3']

    const [openForm, setOpenForm] = useState(false)
    const [doctorEvent, setDoctorEvent] = useState('')
    const [hourEvent, setHourEvent] = useState('')
    const [allSchedule, setAllSchedule] = useState([])

    const closeForm = () => {
        setOpenForm(false)
    }

    const openFormDiv = () => {
        setOpenForm(true)
    }
    const logGrid = (e)=>{
        setDoctorEvent(e.target.getAttribute('id'))
        setHourEvent(e.target.getAttribute('name'))
        openFormDiv()
    }

    // FORM HANDLING
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value, hour:hourEvent, doctor:doctorEvent }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        closeForm();
        
        console.log(allSchedule);
    }


    return <Main>
        <FormDiv onSubmit={handleSubmit} display={openForm && 'block'}>
            <FlexDiv>
                <H4 weight="bold">Add Appointment</H4>
                <CloseBtn onClick={closeForm}>X</CloseBtn>
            </FlexDiv>

            <FormControl>
                <Label>Type</Label>
                <Input 
                    onChange={handleChange}
                    value={inputs.type}
                    width="100%" 
                    type="text" 
                    placeholder="New Appointments"
                    name="type" />
            </FormControl>

            <FormControl>
                <Label>From</Label>
                <FlexDiv>
                    <Input
                        width="100%" 
                        type="date" 
                        onChange={handleChange} 
                        value={inputs.fromDate}
                        name="fromDate"
                        />
                    &nbsp;
                    <InputSelect 
                        onChange={handleChange} 
                        value={inputs.fromTime}
                        name="fromTime">
                        {time.map(item => {
                            return <option value={item.value}>{item.value}</option>
                        })}
                    </InputSelect>
                </FlexDiv>
            </FormControl>

            <FormControl>
                <Label>To</Label>
                <FlexDiv>
                    <Input 
                        width="100%" 
                        type="date" 
                        name="toDate" 
                        onChange={handleChange} 
                        value={inputs.toDate}/>
                    &nbsp;
                    <InputSelect name="toTime" onChange={handleChange} value={inputs.toTime}>
                        {time.map(item => {
                            return <option value={item.value}>{item.value}</option>
                        })}
                    </InputSelect>
                </FlexDiv>
            </FormControl>

            <FormControl>
                <Label>Attach Patient</Label>
                <Input
                     width="100%" 
                    type="text" 
                    placeholder="New Appointments" 
                    onChange={handleChange} value={inputs.patient}
                    name="patient"
                    />
            </FormControl>

            <FormControl>
                <Label>Attending Physician</Label>
                <Input 
                    width="100%" 
                    type="text" 
                    placeholder="New Appointments"
                    onChange={handleChange} value={inputs.physician}
                    name="pysician" />
            </FormControl>

            <FormControl>
                <Label>Notes</Label>
                <Input 
                    width="100%" 
                    type="text" 
                    placeholder="New Appointments"
                    onChange={handleChange} value={inputs.notes}
                    name="notes" />
            </FormControl>

            <FormControl>
                <Button type="submit" width="100%" background="#000">Save</Button>
            </FormControl>

        </FormDiv>

        <Appointment
            time="20 Aug, 2021 8:30am  - 20 Aug, 2020 9:30am "
            patient="Arnold Ronald"
            doctor="Dr Mayowa Afolabi"
            title="Full Checkup"
            patientCardBackground="#FFF1D6"
            patientImage="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            doctorImage="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
        />

        {/* <Form display={openForm && 'block'} close={closeForm} /> */}
        

        <Table>
            <Tr>
                {doctors.map(item => (
                    <>
                    <Td>
                        <NameCard
                            name={item.name}
                            image={item.img}
                            background={colors[item.id]}
                        />
                    </Td></>
                ))}
            </Tr>

            {hours.map(hour =>(
                <Tr>
                    {doctors.map(item => (
                            <Td 
                                onClick={(e)=>logGrid(e)} 
                                name={hour.time}
                                key={item.id}
                                id={item.name} >
                                
                            </Td>
                    ))}
                </Tr>
            ))}
        </Table>

    </Main>
}

export default Grid
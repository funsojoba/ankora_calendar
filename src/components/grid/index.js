import { Main, GridDiv, GridChild } from './style'
import NameCard from "../nameCard"
import Form from '../form'
import Appointment from '../appointment'
// import Schedule from '../shedule'
import { useState } from 'react'
import hours from './hours'

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


    const closeForm = () => {
        setOpenForm(false)
        console.log(openForm)
    }

    const openFormDiv = () => {
        setOpenForm(true)
    }
    const logGrid = (e)=>{
        console.log(e.target.getAttribute('name'))
        openFormDiv()
    }

    return <Main>
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
        <GridDiv count={doctors.length + 1}>
            <GridChild height="70px" name="grid 5" onClick={(e)=>logGrid(e)}></GridChild>
            
            {doctors.map(item =>(
            <GridChild height="70px">
                <NameCard 
                    name={item.name}
                    image={item.img}
                    background={colors[item.id]}
                />
            </GridChild>
            ))}

            {/* HOURS */}
            {hours.map(hour =>(
                <GridChild key={hour.id} name={hour.id} onClick={(e) => logGrid(e)}>
                    
                </GridChild>
            ))}
            
        </GridDiv>
    </Main>
}

export default Grid
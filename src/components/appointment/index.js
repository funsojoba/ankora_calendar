import { Div, FlexDiv, CloseBtn, PatientCard, SmallDiv, Button, IconDiv } from "./style";
import H4 from "../typography/h4";
import Circle from "../circle";



const Appointment = ({ display, close, title, patient, time, doctor, patientCardBackground, patientImage, doctorImage }) => {
    return <Div>
        <FlexDiv>
            <H4 weight="bold">{title}</H4>
            <CloseBtn onClick={close}>x</CloseBtn>
        </FlexDiv>

        <PatientCard background={patientCardBackground}>
            <FlexDiv>
                <Circle background={patientImage} width="25px" /> &nbsp;
                <H4>{patient}</H4>
            </FlexDiv>
            <IconDiv><i className="fas fa-external-link-alt"></i></IconDiv>
        </PatientCard>

        <FlexDiv>
            <div><i className="far fa-clock"></i></div>
            <H4>{time}</H4>
        </FlexDiv>

        <FlexDiv justify="flex-start" borderBottom="solid 1px #f9f9f9">
            <div><i className="far fa-user"></i></div> &nbsp; &nbsp;
            <SmallDiv>
                <Circle background={doctorImage} width="25px" /> &nbsp;
                <H4>{doctor}</H4>
            </SmallDiv>
        </FlexDiv>

        <FlexDiv>
        <SmallDiv>
            <Button background="#FFE0D9" color="#F97B5C">Check in <i className="fas fa-circle-notch"></i></Button>
            <Button background="#f9f9f9" color="#666">Cancel <i className="fas fa-minus-circle"></i></Button>
        </SmallDiv>
            <IconDiv> <i className="fas fa-pencil-alt"></i> </IconDiv>
        </FlexDiv>
    </Div>
}

export default Appointment

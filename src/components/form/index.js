import Select from "../input/select";
import Input from "../input/index"
import Button from "../button"
import H4 from "../typography/h4"

import {FormDiv, FormControl, FlexDiv, Label, CloseBtn, InputSelect} from './style'
import { time } from "./timeOption";

const Form = ({display, close})=>{

    return <FormDiv display={display}>
        <FlexDiv>
            <H4 weight="bold">Add Appointment</H4>
            <CloseBtn onClick={close}>X</CloseBtn>
        </FlexDiv>
        <FormControl>
            <Label>Type</Label>
            <Input width="100%" type="text" placeholder="New Appointments"/>
        </FormControl>
        <FormControl>
            <Label>From</Label>
            <FlexDiv>
                <Input width="100%" type="date" />
                &nbsp;
                <InputSelect>
                    {time.map(item => {
                        return <option value={item.value}>{item.value}</option>
                    })}
                </InputSelect>
            </FlexDiv>
        </FormControl>
        <FormControl>
            <Label>To</Label>
            <FlexDiv>
                <Input width="100%" type="date" />
                &nbsp;
                <InputSelect>
                    {time.map(item => {
                        return <option value={item.value}>{item.value}</option>
                    })}
                </InputSelect>
            </FlexDiv>
        </FormControl>
        <FormControl>
            <Label>Attach Patient</Label>
            <Input width="100%" type="text" placeholder="New Appointments"/>
        </FormControl>
        <FormControl>
            <Label>Attending Physician</Label>
            <Input width="100%" type="text" placeholder="New Appointments"/>
        </FormControl>
        <FormControl>
            <Label>Notes</Label>
            <Input width="100%" type="text" placeholder="New Appointments"/>
        </FormControl>
        <FormControl>
            <Button type="submit" width="100%" background="#000">Save</Button>
        </FormControl>

    </FormDiv>
}

export default Form
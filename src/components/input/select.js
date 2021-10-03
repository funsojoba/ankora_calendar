import styled from "styled-components";


export const SelectDiv = styled.div`
    select{
        background:${props => props.background ? props.background : 'none'};
        border:${props => props.border ? props.border : "none"};
        color:#000;
        width: ${props => props.width ? props.width : "auto"};
        border-radius: 15px;
        padding: ${props => props.padding ? props.padding : "none"};
        outline:none;
    }
`


const Select = ({width, border, padding, name, value, background, options})=>{
    return <SelectDiv width={width}
        border={border}
        padding={padding}
        background={background}>
            {options.map(option =>{
                return (
                    <option key={option.value} value={option.value}>{option.value}</option>
                )
            })}

        </SelectDiv>
}

export default Select
import styled from 'styled-components'

export const FormDiv = styled.form`
    background: #fff;
    padding:30px;
    box-shadow:1px 2px 20px rgba(0,0,0,.05);
    width:450px;
    border-radius:20px;
    display: ${props => props.display ? props.display : 'none'}
`

export const FormControl = styled.div`
    padding:10px;
    width:100%;
`
export const FlexDiv = styled.div`
    display: flex;
    justify-content:space-between;
`

export const Label = styled.label`
    color: #666;
    display:block;
    margin-bottom:5px;
    text-align:left;
`

export const CloseBtn = styled.div`
    width: 25px;
    height:25px;
    border-radius:5px;
    background:#f9f9f9;
    color:#000;
    display:flex;
    justify-content:center;
    align-items:center;
    cursor:pointer;
    transition: all ease-in-out 300ms;
    &:hover{
        background:#666;
        color:#fff;
    }
`

export const InputSelect = styled.select`
    border:none;
    width: ${props => props.width ? props.width : "auto"};
    outline:none;
    background:#f5f5f5;
    color:#000;
    padding:10px 15px;
    border-radius: 10px;
    `
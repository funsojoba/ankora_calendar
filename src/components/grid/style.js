import styled, {keyframes} from "styled-components";


export const Main = styled.div`
    width:100%;
    height:100%;
    position: relative;
`

export const GridDiv = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.count ? props.count : '5'}, 1fr);
`
export const GridChild = styled.div`
    border-right:solid 1px #eeeeee;
    border-bottom:solid 1px #eeeeee;
    padding:10px;
    min-width: 270px;
    height:${props => props.height ? props.height :'150px'};
    cursor:pointer;
    transition:all ease-in-out 200ms;
    &::active{
        background: #fafafa;}

    &:hover{
        background:#fafafa;
    }
`


// FORM STYLING

const slidIn = keyframes`
     from {
            transform: translateX(200px);
        }

        to {
            transform: translateX(0);
        }
`

export const FormDiv = styled.form`
    background: #fff;
    padding:30px;
    box-shadow:1px 2px 20px rgba(0,0,0,.05);
    width:450px;
    border-radius:20px;
    display: ${props => props.display ? props.display : 'none'};
    position:fixed;
    top:50px;
    right:50px;
    z-index:10;
    animation: ${slidIn} 300ms;
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


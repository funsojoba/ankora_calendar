import styled, {css} from 'styled-components'


export const SideBarDiv = styled.div`
    width: 300px;
    padding:40px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    height:100vh;
`

export const ListDiv = styled.div`
    padding:10px;
    border-radius:10px;
    display: flex;
    margin-bottom:5px;
    cursor:pointer;
    position:relative;
    
    ${({active})=>active && css`
        color:#fff;
        background:#F97B5C;

        &:before{
            content:'';
            width:10px;
            height:10px;
            background:#fff;
            border-radius: 50%;
            position: absolute;
            top:50%;
            transform: translateY(-50%);
            right:10px;
        }

    ` }
`

export const IconDiv = styled.div`

`
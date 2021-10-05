import { TableDiv, TrDiv, TdDiv, TheadDiv } from "./style";


export const Table = ({children})=>{
    return <TableDiv>
        {children}
    </TableDiv>
}

export const Tr = ({children})=>{
    return  <TrDiv>
        {children}
    </TrDiv>
}

export const Td = ({children, onClick, name, id})=>{
    return <TdDiv id={id} name={name} onClick={onClick}>{children}</TdDiv>
}

export const Thead = ({children})=>{
    return <TheadDiv>{children}</TheadDiv>
}
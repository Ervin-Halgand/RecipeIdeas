import { FunctionComponent } from "react"
import styled from "styled-components";

export const NoResult: FunctionComponent = () => {
    return (
        <NoResultWrapper>No result</NoResultWrapper>
    )
}

const NoResultWrapper = styled.div`
width: 100%;
display:flex;
justify-content: center;
font-size: 52px;
color: #ff9600;
font-weight: 600;
`
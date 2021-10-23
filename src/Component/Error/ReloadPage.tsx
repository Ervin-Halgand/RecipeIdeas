import { FunctionComponent } from "react"
import styled from "styled-components";


export const RealoadPage: FunctionComponent<any> = ({ onClick }: { onClick: Function }) => {
    return (
        <RealoadPageWrapper>
            <RealoadPageButton onClick={() => onClick()}>
                Reload
            </RealoadPageButton>
        </RealoadPageWrapper>
    )
}

const RealoadPageWrapper = styled.div`
min-height: 50vh;
width: 100%;
display:flex;
justify-content: center;
`
const RealoadPageButton = styled.button`
letter-spacing: .5px;
height: 45px;
display:flex;
align-items: center;
position: relative;
padding: 15px 50px;
background-color: #fb0700;
border-radius: 10px;
color: white;
font-weight: 500;
font-size: 15px;
transition: background-color .5s ease;
&:hover {
  background-color: #c10904;
}
`
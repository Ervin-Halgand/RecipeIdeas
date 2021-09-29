import { FunctionComponent } from "react";
import styled from 'styled-components'
export const Footer: FunctionComponent = () => {
    return (
        <FooterWrapper>
            <FooterCopiright>&copy; 2021 Copyright : </FooterCopiright> Ervin Halgand
        </FooterWrapper>
    )
}

const FooterCopiright = styled.span`
font-weight: 600;
margin-right: 5px;
`

const FooterWrapper = styled.footer`
margin-top: 100px;
height: 60px;
background: linear-gradient(to bottom,#FFC837,#FF8008);
color: white;
font-size: 18px;
align-items: center;
justify-content: center;
display: flex;
}
`

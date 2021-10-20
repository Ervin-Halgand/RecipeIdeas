import { FunctionComponent } from "react";
import styled from "styled-components";
import recipeImg from "../../Assets/Image/recipe-book.png"

export const Header: FunctionComponent = () => {
    return (
        <HeaderWrapper>
            <HeaderImg src={recipeImg} width="64" height="64" alt="logo" />
            <HeaderTitle>Recipe Ideas</HeaderTitle>
        </HeaderWrapper>
    )
}

const HeaderImg = styled.img`
@media screen and (max-width: 507px) {
    width: 50px;
    height: 50px;
}
`

const HeaderTitle = styled.h1`
font-size: 45px;
color: white;
margin-left: 20px;
font-weight: 400;
@media screen and (max-width: 507px) {
    font-size: 30px;
}
`

const HeaderWrapper = styled.header`
height: 100px;
width: 100%;
background: #FF8008;
background: -webkit-linear-gradient(to top, #FFC837, #FF8008);
background: linear-gradient(to top, #FFC837, #FF8008);
display: flex;
align-items: center;
padding: 0 80px;
@media screen and (max-width: 666px) {
    padding: 0 0px;
    justify-content: center;
  }
`
import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import searchImg from "../../Assets/Image/loupe.png"

export const SearchBar: FunctionComponent = () => {

    const [input, setInput] = useState<string>("Chiken")
    const [inputError, setInputErrornput] = useState<string>("")

    const validate = (): void => {
        if (input.length === 0)
            setInputErrornput("Please type food");
        else
            setInputErrornput("");
    }

    return (
        <SearchBarHandler>
            <SearchBarInputHandler>
                <SearchBarInputLabel htmlFor="food" style={{ color: inputError.length ? "red" : "" }}>{inputError.length ? inputError : "Food"}</SearchBarInputLabel>
                <SearchBarInput onKeyUp={(e) => e.key === "Enter" && validate()} name="food" value={input} onChange={(e) => setInput(e.target.value)}></SearchBarInput>
                <SearchBarButton onClick={() => validate()}>
                    <SearchBarButtonImg src={searchImg} alt="search" />
                </SearchBarButton>
            </SearchBarInputHandler>
            <SearchBarFilterHandler>
                div
            </SearchBarFilterHandler>
        </SearchBarHandler>
    )
}


const SearchBarFilterHandler = styled.label`
display:flex;
background-color: red;
`

const SearchBarInputLabel = styled.label`
position: absolute;
font-size: 20px;
transform: translate3d(0, -80%, 0px);
`

const SearchBarButtonImg = styled.img`
width: 32px;
height: 32px;
`

const SearchBarButton = styled.button`
background-color: transparent;
font - size: 2.4rem;
line - height: 2.4rem;
vertical - align: middle;
transition: filter .5s ease;
&:hover {
    filter: hue-rotate(150deg);
}
`

const SearchBarInput = styled.input`
flex-grow: 1;
font-size: 1.8rem;
line-height: 2.4rem;
vertical-align: middle;
  `
const SearchBarInputHandler = styled.div`
position: relative;
display: flex;
flex-direction: row;
width: 100%;
margin: 0 auto;
border-radius: 2px;
padding: 1.4rem 2rem 1.6rem;
background: blue;
`

const SearchBarHandler = styled.div`
border: 1px solid black;
display:flex;
flex-direction: column;
margin-bottom: 50px;
`
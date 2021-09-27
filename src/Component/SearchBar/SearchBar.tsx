import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import searchImg from "../../Assets/Image/loupe.png"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { CuisineType, Diet, MealTypes } from "../../API/Edamam/RecipesModel";
import './style.css'


export const SearchBar: FunctionComponent<any> = ({ fetchWithArgs }) => {

    const [input, setInput] = useState<string>("chicken rice beef")
    const [inputError, setInputError] = useState<string>("")
    const [argument, setArgument] = useState({ MealTypes: "", Diet: "", CuisineType: "" });

    const handleChange = (event: any) => {
        for (let meal in MealTypes)
            if (meal === event.target.value)
                setArgument({ ...argument, MealTypes: event.target.value })
        for (let cuisine in CuisineType)
            if (cuisine === event.target.value.replaceAll(' ', ''))
                setArgument({ ...argument, CuisineType: event.target.value })
        for (let type in Diet)
            if (type.toLowerCase() === event.target.value.replaceAll('-', ''))
                setArgument({ ...argument, Diet: event.target.value })
    };

    const validate = (): void => {
        if (input.length === 0) {
            setInputError("Please type food");
            return;
        }
        setInputError("");
        fetchWithArgs(input, argument.Diet, argument.CuisineType, argument.MealTypes);
    }
    const loopEnum = (enumInterface: any) => {

        let listOfMeals: Array<any> = [];
        for (let meal in enumInterface) {
            listOfMeals.push(<MenuItem key={meal} value={enumInterface[meal]}>{enumInterface[meal].replaceAll('-', " ")}</MenuItem>)
        }
        return listOfMeals;
    }

    return (
        <SearchBarHandler>
            <SearchBarInputHandler>
                <FormControl error={inputError.length > 0} variant="outlined" fullWidth>
                    <InputLabel
                        htmlFor="food">Food</InputLabel>
                    <Input endAdornment={<InputAdornment position="end"><SearchBarButton onClick={() => validate()}>
                        <SearchBarButtonImg src={searchImg} alt="search" />
                    </SearchBarButton></InputAdornment>}
                        value={input}
                        onChange={(e) => setInput(e.target.value)} onKeyUp={(e) => e.key === "Enter" && validate()} />
                    <FormHelperText id="component-error-text">{inputError}</FormHelperText>
                </FormControl>
            </SearchBarInputHandler>
            <SearchBarFilterHandler>
                <FormControl sx={{ m: 1, minWidth: 130 }}>
                    <InputLabel id="MealTypes">Meal types</InputLabel>
                    <Select
                        labelId="MealTypes"
                        id="MealTypes"
                        value={argument.MealTypes}
                        label="Mealtypes"
                        onChange={handleChange}
                        MenuProps={{
                            PaperProps: {
                                style: {
                                    maxHeight: 200,
                                },
                            }
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {loopEnum(MealTypes)}
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 130 }}>
                    <InputLabel id="Diet">Diet</InputLabel>
                    <Select
                        labelId="Diet"
                        id="Diet"
                        value={argument.Diet}
                        label="Diet"
                        onChange={handleChange}
                        MenuProps={{
                            PaperProps: {
                                style: {
                                    maxHeight: 200,
                                },
                            }
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {loopEnum(Diet)}
                    </Select>
                </FormControl>
                <FormControl sx={{ m: 1, minWidth: 130 }}>
                    <InputLabel id="CuisineType">Meal types</InputLabel>
                    <Select
                        labelId="CuisineType"
                        id="CuisineType"
                        value={argument.CuisineType}
                        label="CuisineType"
                        onChange={handleChange}
                        MenuProps={{
                            PaperProps: {
                                style: {
                                    maxHeight: 200,
                                },
                            }
                        }}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        {loopEnum(CuisineType)}
                    </Select>
                </FormControl>
                <SearchBarFilterClearAll onClick={() => setArgument({ MealTypes: "", Diet: "", CuisineType: "" })}>
                    Clear all
                </SearchBarFilterClearAll>
            </SearchBarFilterHandler>
        </SearchBarHandler >
    )
}

const SearchBarFilterClearAll = styled.button`
color: #ff9600;
background-color: transparent;
font-size: 16px;
font-weight: 600;
margin-left: auto;
`

const SearchBarFilterHandler = styled.label`
display:flex;
padding: 10px;
align-items: center;
`

const SearchBarButtonImg = styled.img`
width: 24px;
height: 24px;
margin-right: 10px;
margin-bottom: 10px;
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

const SearchBarInputHandler = styled.div`
position: relative;
display: flex;
flex-direction: row;
width: 100%;
margin: 0 auto;
border-radius: 2px;
padding: 10px;
padding-top: 20px;`

const SearchBarHandler = styled.div`
background-color: white;
border-radius: 5px;
display:flex;
flex-direction: column;
margin-bottom: 50px;
`
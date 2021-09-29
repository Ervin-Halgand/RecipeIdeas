import React, { FunctionComponent, useState } from "react";
import styled from "styled-components";
import searchImg from "../../Assets/Image/loupe.png"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import { CuisineType, Diet, MealTypes } from "../../API/Edamam/RecipesModel";
import './style.css'
import { OutlinedInput } from "@mui/material";


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
            setInputError("Type some food");
            return;
        }
        setInputError("");
        fetchWithArgs(input, argument.Diet, argument.CuisineType, argument.MealTypes);
    }
    const loopEnum = (enumInterface: any) => {
        let listOfMeals: Array<any> = [];
        for (let meal in enumInterface)
            listOfMeals.push(<MenuItem key={meal} value={enumInterface[meal]}>{enumInterface[meal].replaceAll('-', " ")}</MenuItem>)
        return listOfMeals;
    }

    return (
        <SearchBarHandler>
            <SearchBarInputHandler>
                <FormControl error={inputError.length > 0} fullWidth sx={{
                    "& .MuiInput-underline:hover:not(.Mui-disabled):before": {
                        borderColor: "red"
                    }
                }}>
                    <InputLabel htmlFor="food">Food</InputLabel>
                    <OutlinedInput label="Food" id="food" endAdornment={<InputAdornment position="end"><SearchBarButton onClick={() => validate()}>
                        <SearchBarButtonImg src={searchImg} alt="search" />
                    </SearchBarButton></InputAdornment>}
                        value={input}
                        onChange={(e) => setInput(e.target.value)} onKeyUp={(e) => e.key === "Enter" && validate()} />
                    <FormHelperText id="component-error-text">{inputError}</FormHelperText>
                </FormControl>
                <SearchBarFilterHandler>
                    {
                        [{ name: "Meal types", id: "MealTypes", value: argument.MealTypes, type: MealTypes },
                        { name: "Diet", id: "Diet", value: argument.Diet, type: Diet },
                        { name: "Cuisine Type", id: "CuisineType", value: argument.CuisineType, type: CuisineType },].map((item, i) =>
                            <FormControl sx={{ m: 1, minWidth: 140 }} key={i} size="small">
                                <InputLabel id={item.id}>{item.name}</InputLabel>
                                <Select
                                    labelId={item.id}
                                    id={item.id}
                                    value={item.value}
                                    label={item.name}
                                    onChange={handleChange}
                                    MenuProps={{ PaperProps: { style: { maxHeight: 200 } } }} >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    {loopEnum(item.type)}
                                </Select>
                            </FormControl>
                        )
                    }
                    <SearchBarFilterClearAll onClick={() => { setArgument({ MealTypes: "", Diet: "", CuisineType: "" }); setInput(""); }}>
                        Clear all
                    </SearchBarFilterClearAll>
                </SearchBarFilterHandler>
            </SearchBarInputHandler>
        </SearchBarHandler >
    )
}

const SearchBarFilterClearAll = styled.button`
color: #ff9600;
background-color: transparent;
font-size: 16px;
font-weight: 600;
margin-left: auto;
transition: color .5s ease;
min-width: 70px;
&:hover {
    color: #d07c00;
}
`

const SearchBarFilterHandler = styled.label`
display:flex;
align-items: center;
flex: 1;
@media screen and (max-width: 950px) {
    width: 100%;
    flex-wrap: wrap;
}
`

const SearchBarButtonImg = styled.img`
width: 16px;
height: 16px;
`

const SearchBarButton = styled.button`

background-color: #ff9600;
height: 40px;
width: 40px;
display:flex;
justify-content: center;
align-items:center;
border-radius: 4px;
    &:hover {
        background-color: #d07c00;
    }
transition: background-color .5s ease;
`

const SearchBarInputHandler = styled.div`
position: relative;
display: flex;
flex-direction: row;
align-items: center;
width: 100%;
margin: 0 auto;
border-radius: 10px;
box-shadow: 0 2px 4px rgb(0 0 0 / 1%), 0 2px 4px rgb(0 0 0 / 5%);
padding: 20px;
@media screen and (max-width: 950px) {
    flex-direction: column;
}
`

const SearchBarHandler = styled.div`
background-color: white;
border-radius: 5px;
display:flex;
flex-direction: column;
margin-bottom: 50px;
`
import { FunctionComponent } from "react"
import styled from 'styled-components';
import { Recipe } from "../../../API/Edamam/RecipesModel";

export interface IRecipeProps {
    recipe: Recipe
}

export const CardHeading: FunctionComponent<IRecipeProps> = ({ recipe }: IRecipeProps) => {
    return (
        <CardWrapperHeader>
            <CardWrapperHeaderImg width="104" height="104" src={recipe.image} alt={recipe.label} />
            <CardWrapperHeaderDescHandler>
                <CardWrapperHeaderTitle>
                    {recipe.label}
                </CardWrapperHeaderTitle>
                <CardWrapperHeaderCalories>
                    {Math.round(recipe.calories)} cal
                </CardWrapperHeaderCalories>
            </CardWrapperHeaderDescHandler>
        </CardWrapperHeader>
    )
}

export const CardWrapperHeader = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-bottom: 10px;
`

const CardWrapperHeaderImg = styled.img`
object-fit: cover;
border-radius: 50%;
margin-right: 10px;
border: 4px solid #e9d9d9;
`

export const CardWrapperHeaderDescHandler = styled.div`
height: 100%;
display: flex;
flex-direction: column;
margin-right: auto;
width: 100%;
`

const CardWrapperHeaderTitle = styled.h2`
font-size: 22px;
font-weight: 700;
`

const CardWrapperHeaderCalories = styled.div`
color: #424242;
margin-top: auto;
`
import React, { FunctionComponent } from "react";
import styled from 'styled-components';
import { Recipe } from "../../API/Edamam/RecipesModel";
import chronometerImg from '../../Assets/Image/chronometer.png'


export const Card: FunctionComponent<Recipe> = (recipe: Recipe) => {
    console.log(recipe);
    const foodItems = recipe.ingredients.map((ingredient, i) => {
        return <CardWrapperIngredientsItem key={i}>
            <CardWrapperIngredientsItemImg src={ingredient.image} />
            <CardWrapperIngredientsItemName>
                {ingredient.food}
            </CardWrapperIngredientsItemName>
        </CardWrapperIngredientsItem>
    }).slice(0, 6);
    return (
        <CardWrapper>
            <CardWrapperHeader>
                <CardWrapperHeaderImg src={recipe.image} alt={recipe.label} />
                <CardWrapperHeaderDescHandler>
                    <CardWrapperHeaderTitle>
                        {recipe.label}
                    </CardWrapperHeaderTitle>
                    <CardWrapperHeaderCalories>
                        {Math.round(recipe.calories)} cal
                    </CardWrapperHeaderCalories>
                </CardWrapperHeaderDescHandler>
            </CardWrapperHeader>
            <CardWrapperIngredients>
                <CardWrapperIngredientsTitle>
                    Ingredients
                </CardWrapperIngredientsTitle>
                <CardWrapperIngredientsHandler>
                    {foodItems}
                </CardWrapperIngredientsHandler>
            </CardWrapperIngredients>
            <CardWrapperMoreHandler>
                <CardWrapperMoreButton>More</CardWrapperMoreButton>
                <CardWrapperMoreTime>
                    <CardWrapperMoreImg src={chronometerImg} /> 17 mins
                </CardWrapperMoreTime>
            </CardWrapperMoreHandler>
        </CardWrapper>
    )
}

const CardWrapperMoreImg = styled.img`
width: 20px;
height: 20px;
`

const CardWrapperMoreTime = styled.div`
display:flex;
justify-content: center;
align-items: center;
`

const CardWrapperMoreButton = styled.button`


`
const CardWrapperMoreHandler = styled.div`
margin-top: 10px;
display:flex;
align-items: center;
justify-content: space-between;
`
const CardWrapperIngredientsItemName = styled.div`
text-align: center;
`

const CardWrapperIngredientsItemImg = styled.img`
width: 50px;
height: 45px;
object-fit: cover;
margin-bottom: 5px;
border-radius: 15px;
`

const CardWrapperIngredientsItem = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 8px 0px;
border-radius: 10px;
background-color: white;
`

const CardWrapperIngredientsHandler = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 10px 10px;
`

const CardWrapperIngredientsTitle = styled.h3`
`

const CardWrapperIngredients = styled.div`
`

const CardWrapper = styled.section`
background-color: rgb(255 244 231);
padding: 10px;
border-radius: 7px;
`

const CardWrapperHeader = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width: 100%;
`

const CardWrapperHeaderImg = styled.img`
width: 104px;
height: 104px;
object-fit: cover;
border-radius: 50%;
margin-right: 10px;
border: 4px solid #e9d9d9;
`

const CardWrapperHeaderDescHandler = styled.div`
height: 100%;
display: flex;
flex-direction: column;
margin-right: auto;
`

const CardWrapperHeaderTitle = styled.div`
`

const CardWrapperHeaderCalories = styled.div`
margin-top: 5px;
`
import React, { FunctionComponent } from "react";
import styled from 'styled-components';
import { Recipe } from "../../API/Edamam/RecipesModel";
import alarmClockImg from '../../Assets/Image/alarm-clock.png'
import proteinesImg from '../../Assets/Image/meat.png'
import starchImg from '../../Assets/Image/starch.png'
import transFatImg from '../../Assets/Image/butter.png'
import playImg from '../../Assets/Image/play.png'


export const Card: FunctionComponent<Recipe> = (recipe: Recipe) => {
    const foodItems = recipe.ingredients.map((ingredient, i) => {
        if (i > 5) return null;
        if (i > 4)
            return (<CardWrapperIngredientsItem key={i} style={{ padding: "2px 0px" }}>
                <CardWrapperIngredientsItemName>
                    <span style={{ color: "#FB9400", fontWeight: 800, fontSize: "16px" }}>{recipe.ingredients.length - i}+ More</span>
                </CardWrapperIngredientsItemName>
            </CardWrapperIngredientsItem>)
        return <CardWrapperIngredientsItem key={i}>
            {/* <CardWrapperIngredientsItemImg src={ingredient.image || noImg} /> */}
            <CardWrapperIngredientsItemName>
                {ingredient.food}
            </CardWrapperIngredientsItemName>
        </CardWrapperIngredientsItem>
    })
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
            <CardWrapperIngredientsTitle>
                Macronutrient
            </CardWrapperIngredientsTitle>
            <CardWrapperNutritient>
                <CardWrapperNutritientItem>
                    <CardWrapperNutritientItemImg src={transFatImg} />
                    <CardWrapperNutritientItemDesc>
                        {Math.round(recipe.totalNutrients.FAT.quantity)} {recipe.totalNutrients.FAT.unit}
                    </CardWrapperNutritientItemDesc>

                </CardWrapperNutritientItem>
                <CardWrapperNutritientItem>
                    <CardWrapperNutritientItemImg src={starchImg} />
                    <CardWrapperNutritientItemDesc>
                        {Math.round(recipe.totalNutrients.CHOCDF.quantity)} {recipe.totalNutrients.CHOCDF.unit}
                    </CardWrapperNutritientItemDesc>
                </CardWrapperNutritientItem>
                <CardWrapperNutritientItem>
                    <CardWrapperNutritientItemImg src={proteinesImg} />
                    <CardWrapperNutritientItemDesc>
                        {Math.round(recipe.totalNutrients.PROCNT.quantity)} {recipe.totalNutrients.PROCNT.unit}
                    </CardWrapperNutritientItemDesc>
                </CardWrapperNutritientItem>
            </CardWrapperNutritient>
            <CardWrapperIngredients>
                <CardWrapperIngredientsTitle>
                    Ingredients
                </CardWrapperIngredientsTitle>
                <CardWrapperIngredientsHandler>
                    {foodItems}
                </CardWrapperIngredientsHandler>
            </CardWrapperIngredients>
            <CardWrapperMoreHandler>
                <a style={{ textDecoration: "none" }} href={recipe.url} target="_blank" rel="noreferrer"><CardWrapperMoreButton>
                    <CardWrapperMoreHandlerImg src={playImg} alt="play" />
                    Let's cook</CardWrapperMoreButton></a>
                <CardWrapperMoreTime>
                    <CardWrapperMoreImg src={alarmClockImg} /> {recipe.totalTime} mins
                </CardWrapperMoreTime>
            </CardWrapperMoreHandler>
        </CardWrapper >
    )
}

const CardWrapperMoreHandlerImg = styled.img`
width: 16px;
height: 16px;
margin-right: 10px;

`

const CardWrapperNutritientItemDesc = styled.div`
width: 100%;
text-align: center;
font-weight: 500;
font-size: 18px;
`

const CardWrapperNutritientItemImg = styled.img`
width: 20px;
height: 20px;
`
const CardWrapperNutritientItem = styled.div`
display:flex;
align-items: center;
padding: 2px 0px;
border-radius: 5px;
border: 1px solid;
flex: 1;
padding: 0px 10px;
`
const CardWrapperNutritient = styled.div`
display: flex;
gap: 9px;
margin-bottom: 15px;
`
const CardWrapperMoreImg = styled.img`
width: 16px;
height: 16px;
margin-right: 10px;
`

const CardWrapperMoreTime = styled.div`
display:flex;
justify-content: center;
align-items: center;
color: #a7a7a7;
`

const CardWrapperMoreButton = styled.button`
display: flex;
align-items: center;
border: none;
padding: 10px 30px;
background-color: #FB9400;
border-radius: 27px;
color: white;
font-weight: 600;
transition: background-color .5s ease;
&:hover {
    background-color: #ee6e73;
}
`
const CardWrapperMoreHandler = styled.div`
margin-top: auto;
display:flex;
align-items: center;
justify-content: space-between;
`
const CardWrapperIngredientsItemName = styled.div`
text-align: center;
font-weight: 600;
font-size: 13px;
`
/* 
const CardWrapperIngredientsItemImg = styled.img`
width: 45px;
height: 45px;
object-fit: cover;
margin-bottom: 5px;
border-radius: 50%;
` */

const CardWrapperIngredientsItem = styled.div`
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 4px 0px;
border-radius: 10px;
background-color: rgb(255, 249, 242);
`

const CardWrapperIngredientsHandler = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 10px 10px;
`

const CardWrapperIngredientsTitle = styled.h3`
margin-bottom: 7px;
font-weight: 500;
`

const CardWrapperIngredients = styled.div`
margin-bottom: 20px;
`

const CardWrapper = styled.section`
display: flex;
flex-direction: column;
background-color: white;
padding: 24px;
border-radius: 7px;
box-shadow: 0 2px 4px rgb(0 0 0 / 1%), 0 2px 4px rgb(0 0 0 / 5%);
`

const CardWrapperHeader = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
width: 100%;
margin-bottom: 10px;
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
width: 100%;
`

const CardWrapperHeaderTitle = styled.h2`
font-size: 22px;
font-weight: 700;
`

const CardWrapperHeaderCalories = styled.div`
color: #a7a7a7;
margin-top: auto;
`
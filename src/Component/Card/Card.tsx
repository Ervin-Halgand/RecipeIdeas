import React, { FunctionComponent } from "react";
import styled from 'styled-components';
import { Recipe } from "../../API/Edamam/RecipesModel";
import { CardAction } from "./CardAction/CardAction";
import { CardHeading } from './CardHeading/CardHeading'
import { CardIngredients } from "./CardIngredients/CardIngredients";
import { CardNutritient } from "./CardNutritient/CardNutritient";


export const Card: FunctionComponent<Recipe> = (recipe: Recipe) => {

    return (
        <CardWrapper>
            <CardHeading recipe={recipe} />
            <CardNutritient recipe={recipe} />
            <CardIngredients recipe={recipe} />
            <CardAction recipe={recipe} />
        </CardWrapper >
    )
}

export const CardWrapper = styled.section`
display: flex;
flex-direction: column;
background-color: white;
padding: 24px;
border-radius: 7px;
box-shadow: 0 2px 4px rgb(0 0 0 / 1%), 0 2px 4px rgb(0 0 0 / 5%);
`
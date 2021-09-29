import { FunctionComponent } from "react"
import styled from 'styled-components';
import { IRecipeProps } from "../CardHeading/CardHeading";

export const CardIngredients: FunctionComponent<IRecipeProps> = ({ recipe }: IRecipeProps) => {
    const foodItems = recipe.ingredients.map((ingredient, i) => {
        if (i > 5) return null;
        if (i > 4)
            return (<CardWrapperIngredientsItem key={i} style={{ padding: "2px 0px" }}>
                <CardWrapperIngredientsItemName>
                    <span style={{ color: "#FB9400", fontWeight: 800, fontSize: "16px" }}>{recipe.ingredients.length - i}+ More</span>
                </CardWrapperIngredientsItemName>
            </CardWrapperIngredientsItem>)
        return <CardWrapperIngredientsItem key={i}>
            <CardWrapperIngredientsItemName>
                {ingredient.food}
            </CardWrapperIngredientsItemName>
        </CardWrapperIngredientsItem>
    });
    return (
        <CardWrapperIngredients>
            <CardWrapperIngredientsTitle>
                Ingredients
            </CardWrapperIngredientsTitle>
            <CardWrapperIngredientsHandler>
                {foodItems}
            </CardWrapperIngredientsHandler>
        </CardWrapperIngredients>
    )
}


const CardWrapperIngredientsItemName = styled.div`
text-align: center;
font-weight: 600;
font-size: 13px;
`

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

export const CardWrapperIngredientsTitle = styled.h3`
margin-bottom: 7px;
font-weight: 500;
`

const CardWrapperIngredients = styled.div`
margin-bottom: 20px;
`
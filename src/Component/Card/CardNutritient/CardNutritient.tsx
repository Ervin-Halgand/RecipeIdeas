import { FunctionComponent } from "react"
import styled from 'styled-components';
import proteinesImg from '../../../Assets/Image/meat.png'
import starchImg from '../../../Assets/Image/starch.png'
import transFatImg from '../../../Assets/Image/butter.png'
import { IRecipeProps } from "../CardHeading/CardHeading";
import { CardWrapperIngredientsTitle } from "../CardIngredients/CardIngredients";

export const CardNutritient: FunctionComponent<IRecipeProps> = ({ recipe }: IRecipeProps) => {
    return (
        <>
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
        </>
    )
}


const CardWrapperNutritientItemDesc = styled.div`
width: 100%;
text-align: center;
font-weight: 500;
font-size: 18px;
`

const CardWrapperNutritientItemImg = styled.img`
width: 20px;
height: 20px;
@media screen and (max-width: 320px) {
    width: 10px;
    height: 10px;
  }
`
const CardWrapperNutritientItem = styled.div`
display:flex;
align-items: center;
padding: 2px 0px;
border-radius: 5px;
border: 1px solid rgba(0, 0, 0, 0.23);
flex: 1;
padding: 0px 10px;
`
export const CardWrapperNutritient = styled.div`
display: flex;
gap: 9px;
margin-bottom: 15px;
`
import { FunctionComponent } from "react"
import styled from 'styled-components';
import { IRecipeProps } from "../CardHeading/CardHeading";
import alarmClockImg from '../../../Assets/Image/alarm-clock.png'
import playImg from '../../../Assets/Image/play.png'

export const CardAction: FunctionComponent<IRecipeProps> = ({ recipe }: IRecipeProps) => {
    return (
        <CardWrapperMoreHandler>
            <a style={{ textDecoration: "none" }} href={recipe.url} target="_blank" rel="noreferrer"><CardWrapperMoreButton>
                <CardWrapperMoreHandlerImg src={playImg} alt="play" />
                Let's cook</CardWrapperMoreButton></a>
            <CardWrapperMoreTime>
                <CardWrapperMoreImg src={alarmClockImg} alt="time"/> {recipe.totalTime} mins
            </CardWrapperMoreTime>
        </CardWrapperMoreHandler>
    )
}

const CardWrapperMoreHandlerImg = styled.img`
width: 16px;
height: 16px;
margin-right: 10px;

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
color: #424242;
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
    background-color: #d07c00;
}
`
const CardWrapperMoreHandler = styled.div`
margin-top: auto;
display:flex;
align-items: center;
justify-content: space-between;
`
import { FunctionComponent } from "react"
import styled from "styled-components";
import { CardWrapper } from "../Card";
import { CardWrapperHeader, CardWrapperHeaderDescHandler } from "../CardHeading/CardHeading";
import { CardWrapperNutritient } from "../CardNutritient/CardNutritient";
import './style.css'

export const CardSkeletonLoader: FunctionComponent = () => {
    return (
        <CardWrapper>
            <CardWrapperHeader>
                <CardWrapperHeaderImgLoading className="loading"></CardWrapperHeaderImgLoading>
                <CardWrapperHeaderDescHandler style={{ width: "60%" }}>
                    <CardWrapperHeaderDescTitleLoading className="loading"></CardWrapperHeaderDescTitleLoading>
                    <CardWrapperHeaderDescCaloriesLoading className="loading"></CardWrapperHeaderDescCaloriesLoading>
                </CardWrapperHeaderDescHandler>
            </CardWrapperHeader>
            <CardWrapperTitleLoading className="loading"></CardWrapperTitleLoading>
            <CardWrapperNutritient style={{ marginTop: "20px" }}>
                {(() => {
                    let loadingComponents = []; for (let i = 0; i < 3; i++)
                        loadingComponents.push(<CardWrapperNutritientItem  key={i} className="loading"></CardWrapperNutritientItem>)
                    return (loadingComponents)
                }
                )()}
            </CardWrapperNutritient>
            <CardWrapperTitleLoading className="loading" style={{ marginTop: "10px" }}></CardWrapperTitleLoading>
            <CardWrapperNutritientHandler style={{ marginTop: "20px" }}>
                {(() => {
                    let loadingComponents = []; for (let i = 0; i < 6; i++)
                        loadingComponents.push(<CardWrapperNutritientItem key={i} className="loading"></CardWrapperNutritientItem>)
                    return (loadingComponents)
                }
                )()}
            </CardWrapperNutritientHandler>
            <CardWrapperActionHandler>
                <CardWrapperActionButtonLoading className="loading"></CardWrapperActionButtonLoading>
                <CardWrapperTimerLoading className="loading"></CardWrapperTimerLoading>
            </CardWrapperActionHandler>
        </CardWrapper>
    )
}

const CardWrapperTimerLoading = styled.div`
width: 20%;
height: 15px;
border-radius: 10px;
`
const CardWrapperActionButtonLoading = styled.div`
border-radius: 27px;
width: 50%;
height: 30px;
`
const CardWrapperActionHandler = styled.div`
margin-top: 35px;
width: 100%;
display:flex;
align-items: center;
justify-content: space-between;
`
const CardWrapperNutritientHandler = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
gap: 10px 10px;
`

const CardWrapperNutritientItem = styled.div`
width: 100px;
height: 28px;
border-radius: 5px;
`

const CardWrapperTitleLoading = styled.div`
width: 40%;
height: 18px;
border-radius: 10px;
`

const CardWrapperHeaderDescTitleLoading = styled.div`
height: 20px;
margin-top: 10px;
border-radius: 10px;
`

const CardWrapperHeaderDescCaloriesLoading = styled.div`
border-radius: 10px;
margin-top: 50px;
margin-bottom: 10px;
width: 30%;
height: 10px;
`

const CardWrapperHeaderImgLoading = styled.div`
width: 104px;
height: 104px;
object-fit: cover;
border-radius: 50%;
margin-right: 10px;
`
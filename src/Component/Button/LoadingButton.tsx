import { FunctionComponent } from "react"
import styled from "styled-components";
import spinner from '../../Assets/Image/loading.png'

export const LoadingButton: FunctionComponent<any> = ({ onClick, isLoading }: { onClick: Function, isLoading: boolean }) => {
    return (
        <LoadingButtonHandler onClick={() => onClick()} disabled={isLoading}>
            {isLoading && <LoadingButtonSpinnerLeft src={spinner} alt={"loading"} />}
            See More
            {isLoading && <LoadingButtonSpinnerright src={spinner} alt={"loading"} />}
        </LoadingButtonHandler>
    )
}

const LoadingButtonSpinnerLeft = styled.img`
position: absolute;
left: 10px;
width: 20px;
height: 20px;
animation: spin 2s ease infinite;
@keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
  }
`

const LoadingButtonSpinnerright = styled.img`
position: absolute;
right: 10px;
width: 20px;
height: 20px;
animation: spin 2s ease infinite;
@keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
  }
`

const LoadingButtonHandler = styled.button`
display:flex;
align-items: center;
position: relative;
padding: 15px 50px;
background-color: #FB9400;
border-radius: 10px;
color: white;
font-weight: 500;
font-size: 15px;
transition: background-color .5s ease;
&:hover {
  background-color: #d07c00;
}
`

export const SeeMoreHandler = styled.div`
width: 100;
display:flex;
justify-content: center;
margin-top: 30px;
`
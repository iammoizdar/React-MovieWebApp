import styled, {
  css
} from 'styled-components'
import Moneyheist from "../../assets/Images/moneyheistbg.png"
import SecondMovie from "../../assets/Images/second-movie.png"
import ThirdMovie from "../../assets/Images/third-movie.png"
export const Moviecard = styled.div `
  display: flex;
    width: 100%;
    margin: auto; 
    max-width: 1300px;
    background-size: cover !important;
    min-height: 616px;
    margin: auto;
    padding: 0 40px;
    border-radius: 26px;
  max-height: 528px;
    cursor: pointer;
    background: url(${Moneyheist});
  ${props => props.primary && css`
  background: url(${SecondMovie});
  `}
  ${props => props.secondary && css`
  background: url(${ThirdMovie});
  `}
`


export const CarouselWrapper = styled.div `
    background: #c4c1c3;
    width: 100%;
    height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-x: hidden;
`
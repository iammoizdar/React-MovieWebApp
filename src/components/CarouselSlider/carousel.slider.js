import styled, {
    css
} from 'styled-components'
import Moneyheist from "../../assets/Images/moneyheistbg.png"
import SecondMovie from "../../assets/Images/second-movie.png"
import ThirdMovie from "../../assets/Images/third-movie.png"
export const Moviecard = styled.div `
  display: flex;
    max-width: 980px;
    width: 100%;
    max-height: 516px;
    margin: auto;
    width: 970px;
    height: 516px;
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
`
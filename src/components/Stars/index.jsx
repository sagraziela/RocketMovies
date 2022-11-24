import { Container } from "./styles";
import { AiFillStar, AiOutlineStar } from 'react-icons/Ai';

export function Stars({ rate }) {

    let movieRate = [];

    for(let i = 1; i <= rate; i++) {
        movieRate.push(<AiFillStar key={i}/>)
    }

    if(rate < 5) {
        for(let i = rate+1; i <= 5; i++) {
            movieRate.push(<AiOutlineStar key={i}/>)
        }
    }

    return (
        <Container>
            {movieRate}
        </Container>
    )
}

import { Container, Title, Author } from "./styles";
import { Tag } from '../Tag';
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle } from 'react-icons/Ai';

export function MovieInfo({ title, rate, author, dateTime }) {

    let movieRate = [];
    console.log(rate)

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
            <Title>
                <h1>{title}</h1>
                <span>
                    {movieRate}
                </span>
            </Title>

            <Author>
                <img src="https://github.com/sagraziela.png" alt="Foto do usuário" />
                <p>
                    Por {author}
                    <span>
                        <AiOutlineClockCircle />
                        {dateTime}
                    </span>
                </p>
            </Author>

            <section>
                <Tag title="Ficção científica" />
                <Tag title="Drama" />
                <Tag title="Aventura" />
            </section>

        </Container>
    )
}
import { Container, Title, Author } from "./styles";
import { Tag } from '../Tag';
import { AiFillStar, AiOutlineStar, AiOutlineClockCircle } from 'react-icons/Ai';
import { Stars } from "../Stars";

export function MovieInfo({ title, author, dateTime }) {

    return (
        <Container>
            <Title>
                <h1>{title}</h1>
                <Stars rate={4} />
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
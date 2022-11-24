import { Container, Title, Author } from "./styles";
import { Tag } from '../Tag';
import { AiOutlineClockCircle } from 'react-icons/Ai';
import { Stars } from "../Stars";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function MovieInfo({ title, rate, author, dateTime, tags }) {

    const { user } = useAuth();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : AvatarPlaceholder;

    return (
        <Container>
            <Title>
                <h1>{title}</h1>
                <Stars rate={rate} />
            </Title>

            <Author>
                <img src={avatarURL} alt={`Foto de ${user.name}.`} />
                <p>
                    Por {author}
                    <span>
                        <AiOutlineClockCircle />
                        {dateTime}
                    </span>
                </p>
            </Author>

            <section>
                { tags && 
                    tags.map(tag => (
                        <Tag 
                        key={tag.id}
                        title={tag.name} />
                    ))
                }
            </section>

        </Container>
    )
}
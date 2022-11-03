import { Container } from "./styles";

export function Tag({ title }) {
    return (
        <Container>
            <strong>{title}</strong>
        </Container>
    )
}
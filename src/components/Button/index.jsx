import { Container } from "./styles";

export function Button({ title, darkBg }) {
    return (
        <Container darkBg={darkBg}>
            {title}
        </Container>
    )
}
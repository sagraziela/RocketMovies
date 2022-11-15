import { Container } from "./styles";

export function Button({ title, darkBg, ...rest }) {
    return (
        <Container 
        darkBg={darkBg}
        {...rest}
        >
            {title}
        </Container>
    )
}
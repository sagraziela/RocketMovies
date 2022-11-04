import { Container } from "./styles";
import { FiArrowLeft } from 'react-icons/fi'

export function ButtonText({ title, href }) {
    return (
        <Container href={href}>
            <FiArrowLeft />
            {title}
        </Container>
    )
}
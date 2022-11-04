import { Container } from "./styles";
import { FiArrowLeft } from 'react-icons/fi'

export function ButtonText({ title, to, hasArrow }) {
    return (
        <Container to={to}>
            {hasArrow && <FiArrowLeft size={20} />}
            {title}
        </Container>
    )
}
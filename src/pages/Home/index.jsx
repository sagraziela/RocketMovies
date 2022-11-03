import { Header } from "../../components/Header";
import { Container, Content, Main } from "./styles";
import { FiPlus } from 'react-icons/fi'
import { Card } from "../../components/Card";

export function Home() {
    return (
        <Container>
            <Header />

            <Content>
                <header>
                    <h1>Meus filmes</h1>
                    <button>
                        <FiPlus />
                        Adicionar filme
                    </button>
                </header>

                <Main>
                    <Card />
                    <Card />
                    <Card />
                </Main>
            </Content>
        </Container>
    )
}
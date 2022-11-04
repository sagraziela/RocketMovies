import { Input } from "../../components/Input";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from "../../components/Button";

export function SignIn() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para salvar seus filmes favoritos</p>

                <h2>Faça seu login</h2>

                <section>
                    <Input type="text" icon={FiMail} placeholder="E-mail" />
                    <Input type="password" icon={FiLock} placeholder="Senha" />
                </section>

                <Button title="Entrar" />

                <a href="#">Criar conta</a>
            </Form>

            <Background />

        </Container>
    )
}
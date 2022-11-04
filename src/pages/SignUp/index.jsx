import { Input } from "../../components/Input";
import { Container, Form, Background } from "./styles";
import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignUp() {
    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para salvar seus filmes favoritos</p>

                <h2>Faça seu login</h2>

                <section>
                    <Input type="text" icon={FiUser} placeholder="Nome" />
                    <Input type="text" icon={FiMail} placeholder="E-mail" />
                    <Input type="password" icon={FiLock} placeholder="Senha" />
                </section>

                <Button title="Cadastrar" />

                <ButtonText title="Voltar para o login" />
            </Form>

            <Background />

        </Container>
    )
}
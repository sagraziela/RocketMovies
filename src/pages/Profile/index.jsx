import { ButtonText } from "../../components/ButtonText";
import { Avatar, Container, Form } from "./styles";
import { FiCamera, FiUser, FiLock, FiMail } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function Profile() {
    return (
        <Container>
            <header>
                <ButtonText to="/" title="Voltar" hasArrow />
            </header>

            <Avatar>
                <img src="https://github.com/sagraziela.png" alt="Foto do usuário" />
                
                <label htmlFor="avatar">
                    <FiCamera />
                    <input type="file" id="avatar" />
                </label>
            </Avatar>
                
            <Form>
                <Input icon={FiUser} value="Graziela Antunes" />
                <Input icon={FiMail} value="graziela@gmail.com" />
                <Input type="password" icon={FiLock} value="123456" />
                <Input type="password" icon={FiLock} placeholder="Nova senha" />

                <Button title="Salvar" />
            </Form>

        </Container>
    )
}
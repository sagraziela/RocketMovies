import { useState, useContext } from "react";
import { useAuth } from "../../hooks/auth";
import { Input } from "../../components/Input";
import { Container, Form, Background } from "./styles";
import { FiMail, FiLock } from 'react-icons/fi'
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {

    const [state, setState] = useState({ email: "", password: "" });

    const { signIn } = useAuth();

    function handleChange(e) {
        setState({...state, [e.target.name]: e.target.value})
    }

    function handleSignIn(e) {
        e.preventDefault();

        if (!state.email || !state.password) {
            return alert('É preciso informar email e senha para logar.');
        }

        signIn(state);
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para salvar seus filmes favoritos</p>

                <h2>Faça seu login</h2>

                <section>
                    <Input 
                    type="text" 
                    icon={FiMail} 
                    placeholder="E-mail"
                    onChange={handleChange}
                    name="email"
                    />

                    <Input 
                    type="password" 
                    icon={FiLock} 
                    placeholder="Senha"
                    onChange={handleChange}
                    name="password"
                    />
                </section>

                <Button 
                title="Entrar"
                onClick={handleSignIn}
                />

                <ButtonText to="/register" title="Criar conta" />
            </Form>

            <Background />

        </Container>
    )
}
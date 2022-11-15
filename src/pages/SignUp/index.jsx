import { useState } from "react";
import { Input } from "../../components/Input";
import { Container, Form, Background } from "./styles";
import { FiUser, FiMail, FiLock } from 'react-icons/fi'
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../services/api";
import { useNavigate } from "react-router";

export function SignUp() {
    
    const [state, setState] = useState({name: "", email: "", password: ""});

    const navigate = useNavigate();

    function handleChange(e) {
        setState({...state, [e.target.name]: e.target.value})
    }
    
    async function handleSignUp(event) {
        event.preventDefault()
        console.log(state)

        if (!state.name || !state.email || !state.password) {
            return alert('Preencha todos os campos para criar sua conta.')
        };

        await api.post("/users", state).then(() => {
            alert("Usuário cadastrado com sucesso!");
            navigate("/");
            
        }).catch(error => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Desculpe! Não foi possível realizar o seu cadastro.");
            }
        })
    }

    return (
        <Container>
            <Form>
                <h1>RocketMovies</h1>
                <p>Aplicação para salvar seus filmes favoritos</p>

                <h2>Crie sua conta</h2>

                <section>
                    <Input 
                    type="text" 
                    icon={FiUser} 
                    placeholder="Nome" 
                    onChange={handleChange}
                    name="name"
                    />

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
                title="Cadastrar" 
                onClick={handleSignUp}
                />

                <ButtonText to="/" title="Voltar para o login" />
            </Form>

            <Background />

        </Container>
    )
}
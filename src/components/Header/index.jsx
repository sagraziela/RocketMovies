import { Container, Input, Profile } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <Container>
            <h2>RocketMovies</h2>
            
            <Input>
                <input type="text" placeholder="Pesquise pelo título" />
            </Input>

            <Profile>
                <div>
                    <strong>Graziela Antunes</strong>
                    <a href="/">sair</a>
                </div>

                <img src="https://github.com/sagraziela.png" alt="Foto do usuário" />
            </Profile>
        </Container>
    )
}
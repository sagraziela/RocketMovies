import { Container, Input, Profile } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
    return (
        <Container>
            <Link to="/">
                <h2>RocketMovies</h2>
            </Link>
            
            <Input>
                <input type="text" placeholder="Pesquise pelo título" />
            </Input>

            <Profile>
                <div>
                    <strong>Graziela Antunes</strong>
                    <a href="/">sair</a>
                </div>

                <Link to="/profile">
                    <img src="https://github.com/sagraziela.png" alt="Foto do usuário" />
                </Link>
            </Profile>
        </Container>
    )
}
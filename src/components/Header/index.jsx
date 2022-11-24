import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { Container, Input, Profile } from "./styles";
import { Link } from "react-router-dom";
import avatarPlaceholder from "../../assets/avatar_placeholder.svg"

export function Header(props) {

    const [search, setSearch] = useState("");

    const { user, signOut } = useAuth();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` :  avatarPlaceholder;

    function handleSignOut() {
        const confirmSignOut = confirm('Tem certeza que deseja sair?');

        confirmSignOut ? signOut() : null;
    }

    if (Object.keys(props).length !== 0) {
        useEffect(() => {
            async function fetchNotes() {
                const response = await api.get(`/notes?title=${search}&tag=${search}`);
                props.setNotes(response.data)
            }
        fetchNotes()
        }, [search])
    }

    return (
        <Container>
            <Link to="/">
                <h2>RocketMovies</h2>
            </Link>
            
            { Object.keys(props).length !== 0 &&
                <Input>
                <input 
                type="text" 
                placeholder="Pesquise pelo título"
                onChange={e => setSearch(e.target.value)}
                />
            </Input>
            }

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <a 
                    href="/"
                    onClick={handleSignOut}
                    >
                        sair
                    </a>
                </div>

                <Link to="/profile">
                    <img src={avatarURL} alt={`Foto de ${user.name}`} />
                </Link>
            </Profile>
        </Container>
    )
}
import { useState } from "react";
import { Header } from "../../components/Header";
import { AddFirstMovieBanner, Container, Content, Main } from "./styles";
import { FiPlus } from 'react-icons/fi'
import { Card } from "../../components/Card";
import { Link } from "react-router-dom";
import { BsPlusCircleDotted } from "react-icons/bs"

export function Home() {
    const [notes, setNotes] = useState([]);

    return (
        <Container>
            <Header setNotes={setNotes} hasInput/>

            <Content>
                <header>
                    <h1>Meus filmes</h1>
                    <Link to="/new-movie">
                        <FiPlus />
                        Adicionar filme
                    </Link>
                </header>

                <Main>

                    { !notes[0] && 
                        <AddFirstMovieBanner to="/new-movie">
                            <h2>Adicione o seu primeiro filme clicando aqui!</h2>
                            <BsPlusCircleDotted size={64} />
                        </AddFirstMovieBanner>
                    }
                    
                    { notes &&
                        notes.map(note => (
                            <Card 
                            key={note.id}
                            to={`/details/${note.id}`}
                            data={note}
                            />
                        ))
                    }

                </Main>
            </Content>
        </Container>
    )
}
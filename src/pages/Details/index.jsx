import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { useAuth } from "../../hooks/auth";
import { Container, Content } from "./styles";
import { Header } from "../../components/Header";
import { MovieInfo } from "../../components/MovieInfo";
import { ButtonText } from "../../components/ButtonText";
import { api } from "../../services/api";
import { HiOutlineTrash } from "react-icons/hi"

export function Details() {

    const [data, setData] = useState(null);

    const { user } = useAuth();

    const params = useParams();
    const navigate = useNavigate();

    async function handleDeleteNote() {
        const confirmDelete = confirm('Tem certeza que deseja excluir essa nota?');

        if (confirmDelete) {
            await api.delete(`/notes/${params.id}`);
            alert('Nota excluída com sucesso.');
            navigate("/");
        }
    }

    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`);
            setData(response.data);
        }
        fetchNote();
    }, []);

    return (
        <Container>
            <Header />

            <Content>
                <section>
                    <ButtonText to="/" title="Voltar" hasArrow />
                    <button
                    onClick={handleDeleteNote}
                    >
                        <HiOutlineTrash size={20} />
                    </button>        
                </section>

                { data &&
                    <>
                    <MovieInfo 
                    title={data.title}
                    rate={data.rate}
                    author={user.name}
                    dateTime={data.created_at === data.updated_at ? data.created_at : data.updated_at}
                    tags={data.tags}
                    />

                    <p> {data.description} </p>
                    </>
                }
            </Content>
        </Container>
    )
}
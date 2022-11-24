import { useState } from "react";
import { useNavigate } from "react-router";
import { Container, Form, Textarea, Markers } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input";
import { TagInput } from "../../components/TagInput";
import { Button } from "../../components/Button";
import { api } from "../../services/api";

export function NewMovie() {

    const [movie, setMovie] = useState({
        title: "",
        rate: "",
        description: "",
        tags: []
    })

    const [newTag, setNewTag] = useState("");

    const navigate = new useNavigate();

    function handleChange(e) {
        setMovie({...movie, [e.target.name]: e.target.value})
    }

    function handleAddNewtag() {
        movie.tags.push(newTag);
        setMovie(movie);
        setNewTag("");
    }

    function handleRemoveTag(deleted) {
        const updatedTags = movie.tags.filter(tag => tag !== deleted);
        setMovie({...movie, tags: updatedTags})
    }

    async function handleSaveNewMovie(e) {
        e.preventDefault()

        if (!movie.title) {
            return alert('É preciso informar o título do filme.')
        }

        if (!movie.rate) {
            return alert('É preciso informar a nota do filme.')
        }

        if (movie.rate > 5 || movie.rate < 1) {
            return alert('Nota inválida. Insira uma nota de 1 à 5 para o seu filme.')
        }

        if (newTag) {
            return alert(`Você inseriu a tag "${newTag}" no campo "nova tag", mas esqueceu de adicioná-la à listagem. Clique no botão "+" para adicionar ou  limpe o campo para continuar.`);
        }

        if (!movie.description) {
            const confirmMovie = confirm('Tem certeza que deseja adicionar esse filme sem nenhuma descrição?');

            if (!confirmMovie) {
                return
            }
        }

        try {
            await api.post("notes", movie).then(() => {
                alert("Filme cadastrado com sucesso!");
                navigate("/");
            })
        } catch (error) {
            return error.response ? error.response.data.message : alert('Não foi possível cadastrar esse filme.')
        }
    }

    function handleDeleteMovie(e) {
        e.preventDefault();

        const confirm = window.confirm('Tem certeza que deseja sair sem salvar as informações?');
        return confirm ? navigate("/") : null
    }

    return (
        <Container>
            <Header />

            <Form>
                <ButtonText to="/" title="Voltar" hasArrow />

                <h1>Novo filme</h1>

                <div className="movieTitle">
                    <Input 
                    placeholder="Título"
                    name="title"
                    value={movie.title}
                    onChange={handleChange}
                    />

                    <Input
                    className="rate"
                    type="number" 
                    placeholder="Sua nota (de 1 a 5)"
                    name="rate"
                    value={movie.rate}
                    onChange={handleChange}
                    />
                </div>

                <Textarea 
                placeholder="Observações" 
                name="description"
                value={movie.description}
                onChange={handleChange}
                />

                <Markers>
                    <p>Marcadores</p>

                    <section className="tags">
                        { movie.tags[0] &&
                            movie.tags.map((tag, index) => (
                                <TagInput
                                key={String(index)}
                                value={tag} 
                                onClick={() => handleRemoveTag(tag)}
                                />
                            ))
                        }

                        <TagInput 
                        isNew 
                        value={newTag} 
                        onChange={e => setNewTag(e.target.value)}
                        onClick={handleAddNewtag}
                        />
                    </section>
                </Markers>

                <div className="buttons">
                    <Button 
                    title="Excluir filme" 
                    onClick={handleDeleteMovie}
                    darkBg 
                    />

                    <Button 
                    title="Salvar alterações" 
                    onClick={handleSaveNewMovie}
                    />
                </div>

            </Form>
        </Container>
    )
}
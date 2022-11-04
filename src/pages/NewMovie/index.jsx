import { Container, Form, Textarea, Markers } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText"
import { Input } from "../../components/Input";
import { TagInput } from "../../components/TagInput";
import { Button } from "../../components/Button";

export function NewMovie() {
    return (
        <Container>
            <Header />

            <Form>
                <ButtonText title="Voltar" />

                <h1>Novo filme</h1>

                <div className="movieTitle">
                    <Input placeholder="Título" />
                    <Input type="number" placeholder="Sua nota (de 0 a 5)" />
                </div>

                <Textarea placeholder="Observações" />

                <Markers>
                    <p>Marcadores</p>

                    <div className="tags">
                        <TagInput value="Romance" />
                        <TagInput value="Comédia" />
                        <TagInput value="Ação" />
                        <TagInput value="Suspense" />
                        <TagInput isNew />
                    </div>
                </Markers>

                <div className="buttons">
                    <Button title="Excluir filme" darkBg />
                    <Button title="Salvar alterações" />
                </div>

            </Form>
        </Container>
    )
}
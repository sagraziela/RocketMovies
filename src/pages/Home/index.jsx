import { Header } from "../../components/Header";
import { Container, Content, Main } from "./styles";
import { FiPlus } from 'react-icons/fi'
import { Card } from "../../components/Card";

export function Home() {
    return (
        <Container>
            <Header />

            <Content>
                <header>
                    <h1>Meus filmes</h1>
                    <button>
                        <FiPlus />
                        Adicionar filme
                    </button>
                </header>

                <Main>
                    <Card data={{
                        title: "Interestellar",
                        rate: 4,
                        comments: "Pragas nas colheitas fizeram a civilização humana    regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o 'fantasma' é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As 'missões Lázaro' enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua:  Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy.",

                        tags: [
                            {id: 1, name: 'Ficção científica'},
                            {id: 2, name: 'Aventura'},
                            {id: 3, name: 'Mistério'},

                        ]
                    }}
                    />

                    <Card data={{
                        title: "Viva! A vida é uma festa!",
                        rate: 5,
                        comments: "Apesar da proibição da música por gerações de sua família, o jovem Miguel sonha em se tornar um músico talentoso como seu ídolo Ernesto de la Cruz. Desesperado para provar seu talento, Miguel se encontra na deslumbrante e colorida Terra dos Mortos. Depois de conhecer um charmoso malandro chamado Héctor, os dois novos amigos embarcam em uma jornada extraordinária para desvendar a verdadeira história por trás da história da família de Miguel.",

                        tags: [
                            {id: 4, name: 'Animação'},
                            {id: 5, name: 'Emocionante'}
                        ]
                    }}
                    />

                    <Card data={{
                        title: "Bird Box",
                        rate: 2,
                        comments: "Bird Box conta a história de uma mãe, Sandra Bullock, que tenta manter os filhos vivos após a invasão de uma raça alienígena letal. No longa, quem olhar pela janela e enxergar os monstros, pode ser levado imediatamente ao suicídio. Por isso, a protagonista permanece vendada a maior parte da história. O longa mostra a chegada desses aliens e a luta pela sobrevivência durante cinco anos. No filme, a personagem de Sandra Bullock, Malorie, recebe uma chamada pelo rádio, pedindo para que ela descesse até o rio, onde há um lugar seguro para todos. O final de Bird Box explica o motivo da protagonista se arriscar, já que que ela estava vivendo tranquilamente em uma floresta. Após uma arriscada jornada, em que Tom (Trevante Rhodes), o padrasto das duas crianças, se arrisca para salvar a sua vida, o trio consegue chegar com vida no Santuário. Lá, descobrem que a salvação é uma escola para deficientes visuais, que não podem ser afetados pelos aliens.",

                        tags: [{id: 6, name: 'Suspense'}]
                    }}
                    />

                    <Card data={{
                        title: "La La Land",
                        rate: 5,
                        comments: "Ao chegar em Los Angeles o pianista de jazz Sebastian (Ryan Gosling) conhece a atriz iniciante Mia (Emma Stone) e os dois se apaixonam perdidamente. Em busca de oportunidades para suas carreiras na competitiva cidade, os jovens tentam fazer o relacionamento amoroso dar certo enquanto perseguem fama e sucesso.",

                        tags: [
                            {id: 7, name: 'Musical'},
                            {id: 8, name: 'Romance'}
                        ]
                    }}
                    />
                </Main>
            </Content>
        </Container>
    )
}
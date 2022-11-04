import { Container } from "./styles";
import { Tag } from '../Tag';
import { Stars } from "../Stars";

export function Card({ data, ...rest }) {
    return (
        <Container {...rest}>
            <header>
                <h1> {data.title} </h1>
                <Stars rate={data.rate} />
            </header>
    
            <p>{data.comments && data.comments}</p>

            {
            data.tags && 
                <div>
                    {data.tags.map(tag => { return <Tag title={tag.name} key={tag.id} /> })}
                </div>
            }
        </Container>
    )
}
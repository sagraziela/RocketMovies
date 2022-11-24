import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-areas: 
    "title"
    "author"
    "tags"
    ;

    > section {
        display: flex;
        gap: 8px;
        margin-bottom: 40px;
    }
`;

export const Title = styled.div`
    grid-area: title;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 20px;

    margin-bottom: 24px;
`;

export const Author = styled.div`
    grid-area: author;
    display: flex;
    justify-content: left;
    align-items: center;
    gap: 8px;

    margin-bottom: 40px;

    > img {
        width: 16px;
        height: 16px;
        border-radius: 50%;
        font-size: 12px;
    }

    > p {
        display: flex;
        gap: 12px;

        span {
            display: flex;
            gap: 8px;
            align-items: center;
        }
    }
`;
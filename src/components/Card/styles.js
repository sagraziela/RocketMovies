import styled from "styled-components";

export const Container = styled.button`
    height: 222px;
    width: 100%;
    background: ${({ theme }) => theme.COLORS.PINK_TRANSPARENT};
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 16px;
    padding: 24px;

    border: none;
    border-radius: 10px;

    cursor: pointer;

    :hover {
        filter: saturate(1.2);
    }

    > header {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    > p {
        text-align: justify;
        overflow: hidden;
        text-overflow: ellipsis; 
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    div {
        display: flex;
        gap: 8px;
    }
`;


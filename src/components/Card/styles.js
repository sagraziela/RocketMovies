import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
    width: 100%;
    background: ${({ theme }) => theme.COLORS.PINK_TRANSPARENT};
    display: flex;
    flex-direction: column;
    justify-content: left;
    gap: 16px;
    padding: 24px;
    text-decoration: none;

    border: none;
    border-radius: 10px;

    cursor: pointer;
    transition: .3s;

    :hover {
        background: #FF859B21;
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
        height: fit-content;
        display: flex;
        gap: 8px;
    }
`;


import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";

    @media (max-width: 780px) {
        grid-template-rows: 80px auto; 
    }
`;

export const Content = styled.div`
    grid-area: content;
    margin: 40px 108px 40px 120px;

    > header {
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;

        a {
            text-decoration: none;
            display: flex;
            align-items: center;
            gap: 8px;
            background: ${({ theme }) => theme.COLORS.PINK};
            color: ${({ theme }) => theme.COLORS.GRAY_800};
            padding: 8px 16px;
            font-weight: 500;

            border: none;
            border-radius: 8px;

            cursor: pointer;
            transition: .3s;

            > svg {
                color: ${({ theme }) => theme.COLORS.GRAY_800};
            }
        }

        > a:hover {
            filter: brightness(.9);
        }
    }

    @media (max-width: 780px) {
        margin: 24px 54px 24px 60px;
        font-size: smaller;

        > header {
            margin-bottom: 16px;
        }
    }
`;

export const Main = styled.main`
    height: 60vh;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 8px 8px 8px 0;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.COLORS.GRAY_700};
        border-radius: 10px;
    }
`;

export const AddFirstMovieBanner = styled(Link)`
    width: 100%;
    height: 90%;
    background: ${({ theme }) => theme.COLORS.PINK_TRANSPARENT};
    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 24px;

    text-decoration: none;

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    :hover {
        background: #FF859B21;
    }
`;
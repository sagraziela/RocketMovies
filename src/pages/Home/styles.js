import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";
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
`;

export const Main = styled.main`
    height: 60vh;
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding: 8px 8px 8px 0;
    overflow-y: scroll;

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 10px;
    }

    ::-webkit-scrollbar-track {
        background: ${({ theme }) => theme.COLORS.GRAY_700};
    }
`;
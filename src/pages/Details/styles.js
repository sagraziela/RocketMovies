import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";
`;

export const Content = styled.main`
    max-height: 73vh;
    grid-area: content;
    margin: 40px 108px 80px 120px;
    padding: 0 24px 24px 0;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    }

    > section {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > button {
            background-color: transparent;
            border: none;
            cursor: pointer;

            > svg {
            color: ${({ theme }) => theme.COLORS.PINK};
            }

            :hover {
                svg {
                    filter: brightness(.9);
                }
            }
        }
    }

    > p {
        text-align: justify;
    }
`;
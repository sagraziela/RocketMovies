import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    border-radius: 10px;
    outline: 2px ${({ theme }) => theme.COLORS.PINK};

    background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_500};

    border: ${({ theme, isNew }) => isNew ? `3px solid ${theme.COLORS.GRAY_300}` : "none"};

    border-style: ${({ isNew }) => isNew ? `dashed` : "none"};

    > input {
        width: 100%;
        height: 56px;
        padding: 16px;
        font-size: 16px;
        border: none;
        background: transparent;
        outline: none;
    }

    > button {
        background: ${({ theme, isNew }) => isNew ? theme.COLORS.PINK : "transparent"};
        display: flex;
        align-items: center;
        margin: 0 16px;
        padding: 2px;

        border: none;
        border-radius: 4px;

        cursor: pointer;

        svg {
            width: 20px;
            height: 20px;
            color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_900 : theme.COLORS.PINK};
        }

        :hover {
            filter: brightness(1.1);
        }
    }
`;
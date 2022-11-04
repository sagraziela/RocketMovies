import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    border: none;
    border-radius: 10px;

    background-color: ${({ theme, darkBg }) => darkBg ? theme.COLORS.GRAY_900 : theme.COLORS.PINK};
    color: ${({ theme, darkBg }) => darkBg ? theme.COLORS.PINK : theme.COLORS.GRAY_900};

    cursor: pointer;

    :hover {
        filter: brightness(.9);
    }
`;
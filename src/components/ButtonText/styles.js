import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.a`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.PINK};
    cursor: pointer;

    > svg {
        color: ${({ theme }) => theme.COLORS.PINK};
        margin-right: 8px;
    }
`;
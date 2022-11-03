import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 8;

    > svg {
        width: 20px;
        height: 20px;
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;
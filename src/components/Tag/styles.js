import styled from "styled-components";

export const Container = styled.div`
    width: fit-content;
    background: ${({ theme }) => theme.COLORS.GRAY_500};
    padding: 8px 16px;
    gap: 8px;

    font-size: 12px;
    line-height: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_200};

    border-radius: 8px;
`;
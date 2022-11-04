import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    border-radius: 10px;

    display: flex;
    align-items: center;
    padding-left: 16px;

    > svg {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        margin-right: 16px;
    }

    > input {
        width: 100%;
        background: transparent;
        border: none;
        outline: none;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        ::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;
import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 56px;
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
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
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        font-size: 16px;
        color: ${({ theme }) => theme.COLORS.GRAY_100};

        ::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

        ::-webkit-outer-spin-button,
        ::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        :-webkit-autofill {
            box-shadow: none;
            -webkit-box-shadow: 0 0 0px 30px ${({ theme }) => theme.COLORS.GRAY_700} inset;
            -webkit-text-fill-color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }

    input[type=number] {
            -moz-appearance:textfield;
    }
`;
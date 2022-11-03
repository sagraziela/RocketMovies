import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    height: 116px;
    width: 100vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

    > h2 {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
`;

export const Input = styled.div`
    width: 630px;
    height: 56px;
    padding-left: 24px;
    border-radius: 10px;

    background: ${({ theme }) => theme.COLORS.GRAY_500};

    display: flex;
    align-items: center;

    > input {
        background-color: transparent;
        font-size: 16px;
        border: none;
        outline: none;

        ::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;

export const Profile = styled.div`
    height: 68px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 8px;
    text-align: right;

    > div {
        display: flex;
        flex-direction: column;

        a {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            text-decoration: none;
        }
    }

    > img {
        width: 64px;
        height: 64px;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.COLORS.GRAY_300};
    }
`;
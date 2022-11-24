import styled from "styled-components";

export const Container = styled.header`
    grid-area: header;
    height: 116px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;

    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};

    > a {
        text-decoration: none;
        padding-left: 120px;
        h2 {
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    @media (max-width: 780px) {
        height: 80px;
        font-size: smaller;

        > a {
            padding-left: 60px;
        }
    }
`;

export const Input = styled.div`
    width: 100%;
    height: 56px;
    margin: 0 24px;
    padding-left: 24px;
    border-radius: 10px;

    background: ${({ theme }) => theme.COLORS.GRAY_700};

    display: flex;
    align-items: center;

    > input {
        background-color: transparent;
        width: 100%;
        height: 100%;
        font-size: 16px;
        border: none;
        outline: none;

        ::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    @media (max-width: 780px) {
        height: 48px;
        font-size: smaller;
        padding-left: 12px;
        margin: 0 12px;

        input {
            font-size: 14px;
        }
    }
`;

export const Profile = styled.div`
    height: 68px;
    padding-right: 108px;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
    text-align: right;

    > div {
        display: flex;
        flex-direction: column;

        a {
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            text-decoration: none;
        }
    }

    > a {
        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
            border: 2px solid ${({ theme }) => theme.COLORS.GRAY_300};
            object-fit: cover;
        }
    }

    @media (max-width: 780px) {
        padding-right: 54px;

        > a {
            > img {
                width: 48px;
                height: 48px;
            }
        }
    }
`;
import styled from "styled-components";
import BgImage from "../../assets/image-bg.png"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;

    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
`;

export const Form = styled.form`
    width: 340px;
    display: flex;
    flex-direction: column;
    margin: auto 136px;

    > h1 {
        font-size: 48px;
        line-height: 63px;
        font-weight: 700;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

    > p {
        font-size: 14px;
    }

    > h2 {
        margin: 48px 0;
    }

    > section {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 24px;

        div {
            background: ${({ theme }) => theme.COLORS.GRAY_700};
        }
    }

    > a {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top: 42px;

        text-decoration: none;
        color: ${({ theme }) => theme.COLORS.PINK};
    }

`;

export const Background = styled.div`
    flex: 1;
    background: url(${BgImage}) no-repeat center center;
    background-size: cover;
`;
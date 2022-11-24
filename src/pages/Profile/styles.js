import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    width: 100vw;

    > header {
        height: 144px;
        background: ${({ theme }) => theme.COLORS.PINK_TRANSPARENT};
        padding: 62px 144px;

        a {
            
        }
    }
`;

export const Avatar = styled.section`
    height: 186px;
    width: 186px;
    margin: -93px auto 64px;
    position: relative;

    > img {
        height: 186px;
        width: 186px;
        border-radius: 50%;
        object-fit: cover;
    }

    > label {
        height: 48px;
        width: 48px;
        border-radius: 50%;
        position: absolute;
        right: 7px;
        bottom: 7px;

        display: flex;
        align-items: center;
        justify-content: center;
        background: ${({ theme }) => theme.COLORS.PINK};

        cursor: pointer;

        input {
            display: none;
        }

        svg {
            width: 20px;
            height: 20px;
            color: ${({ theme }) => theme.COLORS.GRAY_800};
        }

        :hover {
            filter: brightness(.9);
        }
    }
`;

export const Form = styled.form`
    width: 340px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    > div {
        margin-bottom: 8px;
    }

    > :nth-child(2) {
        margin-bottom: 24px;
    }

    > :last-child {
        margin-top: 24px;
    }
`;
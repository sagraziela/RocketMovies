import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-rows: 116px auto;
    grid-template-areas: 
    "header"
    "content";

    .tags {
        display: flex;
        gap: 12px;
        justify-content: space-between;
        padding: 16px;
        background-color: ${({ theme }) => theme.COLORS.GRAY_900};

        border-radius: 10px;
        flex-wrap: wrap;
    }
`;

export const Form = styled.form`
    grid-area: content;
    height: 73vh;
    margin: 40px 108px 80px 120px;
    padding-right: 8px;
    overflow-y: auto;

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background: ${({ theme }) => theme.COLORS.PINK};
        border-radius: 8px;
    }

    ::-webkit-scrollbar-track {
        background-color: ${({ theme }) => theme.COLORS.GRAY_700};
    }

    > .movieTitle {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 40px;
        margin-top: 32px;
    }

    .buttons {
        display: flex;
        justify-content: space-between;
        gap: 40px;
        margin-top: 40px;
    }
`;

export const Textarea = styled.textarea`
    width: 100%;
    height: 274px;
    padding: 16px;
    margin: 32px 0;
    display: flex;
    align-items: center;
    resize: none;

    background-color: ${({ theme }) => theme.COLORS.GRAY_500};
    
    border: none;
    border-radius: 10px;
    outline: none;
    font-size: 16px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    ::placeholder {
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

`;

export const Markers = styled.div`
    display: flex;
    flex-direction: column;
    align-items: left;
    gap: 24px;

    > p {
        display: flex;
        align-items: center;
        justify-content: left;
        text-align: left;
        font-size: 20px;
    }
`;
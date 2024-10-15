import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 1024px;
    height: 100%;
    padding-top: 96px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    @media (max-width: 767px) {
        padding: 24px;
        padding-top: 64px;
        padding-bottom: 64px;
    }
`;

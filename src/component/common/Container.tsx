import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    padding-left: 128px;
    padding-right: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
        padding: 24px;
        padding-bottom: 64px;
    }
`;

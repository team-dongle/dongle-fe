"use client";

import styled from "styled-components";

export default function Home() {
    return (
        <Container>
            <h1>동글</h1>
        </Container>
    );
}

const Container = styled.div`
    width: 100%;
    height: 100vh;
    padding-left: 128px;
    padding-right: 128px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 767px) {
        padding-left: 24px;
        padding-right: 24px;
    }
`;

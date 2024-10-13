"use client";

import { Container } from "@/component/common/Container";
import Card from "@/component/ui/Card";
import { styled } from "styled-components";

export default function Home() {
    return (
        <MainContainer>
            <MainCol>
                <Card />
                <Card />
                <Card />
            </MainCol>
            <MainCol>
                <Card />
                <Card />
                <Card />
            </MainCol>
            <MainCol>
                <Card />
                <Card />
                <Card />
            </MainCol>
        </MainContainer>
    );
}

const MainContainer = styled(Container)`
    @media (max-width: 768px) {
        flex-direction: column;
    }
    gap: 16px;
`;

const MainCol = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 24px;
`;

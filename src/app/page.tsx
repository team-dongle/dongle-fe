"use client";

import { Container } from "@/component/common/Container";
import { useState } from "react";
import { styled } from "styled-components";
import Card from "@/component/ui/main/Card";
import Category from "@/component/ui/main/Category";
import CategoryInput from "@/component/ui/main/CategoryInput";
import Filter from "@/component/ui/main/Filter";
import { clubNames } from "@/constants/mocks";

export default function Home() {
    const [currentCategory, setCurrentCategory] = useState<number[]>([]);
    return (
        <Container>
            <CategoryInput />
            <CategoryAndFilter>
                <Category
                    categoryState={currentCategory}
                    setState={setCurrentCategory}
                />
                <Filter />
            </CategoryAndFilter>
            <MainContainer>
                <MainUl>
                    {clubNames.map((e, index) => {
                        return <Card key={index} />;
                    })}
                </MainUl>
            </MainContainer>
        </Container>
    );
}

const MainContainer = styled.div`
    overflow-y: scroll;
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
        display: none;
    }
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 24px;
`;

const MainUl = styled.ul`
    width: 100%;
    gap: 16px;
    display: grid;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: 640px) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: 1024px) {
        grid-template-columns: repeat(3, 1fr);
    }
`;

const CategoryAndFilter = styled.div`
    gap: 32px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 24px;
`;

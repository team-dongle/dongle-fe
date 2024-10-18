"use client";

import { Container } from "@/component/common/Container";
import { styled, ThemeProvider } from "styled-components";
import Card from "@/component/ui/main/Card";
import Category from "@/component/ui/main/Category";
import CategoryInput from "@/component/ui/main/CategoryInput";
import Filter from "@/component/ui/main/Filter";
import { clubNames } from "@/constants/mocks";
import { useFilter } from "@/hooks/useFilter";
import { useState } from "react";
import Link from "next/link";
import { theme } from "@/styles/theme";

export default function Home() {
    const {
        filterOptions,
        setCategory,
        setRecruiting,
        setNonRecruiting,
        setFilterOptions,
    } = useFilter();

    const [inputValue, setInputValue] = useState("");

    return (
        <ThemeProvider theme={theme}>
            <Container>
                <CategoryInput setInputValue={setInputValue} />
                <CategoryAndFilter>
                    <Category
                        filterOptions={filterOptions}
                        setCategory={setCategory}
                    />
                    <Filter
                        filterOptions={filterOptions}
                        setCategory={setCategory}
                        setRecruiting={setRecruiting}
                        setNonRecruit={setNonRecruiting}
                        setFilterOptions={setFilterOptions}
                    />
                </CategoryAndFilter>
                <MainContainer>
                    <MainUl>
                        {clubNames.map((e, index) => {
                            return (
                                <Link key={index} href={`/detail/${e}`}>
                                    <Card />
                                </Link>
                            );
                        })}
                    </MainUl>
                </MainContainer>
            </Container>
        </ThemeProvider>
    );
}

const MainContainer = styled.div`
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
    @media (min-width: ${({ theme }) => theme.device.tablet}) {
        grid-template-columns: repeat(2, 1fr);
    }
    @media (min-width: ${({ theme }) => theme.device.laptop}) {
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

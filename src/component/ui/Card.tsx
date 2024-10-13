"use Client";

import React, { useState } from "react";
import styled from "styled-components";

interface props {
    clubName: string;
    category: string;
}
const Card = () => {
    const [isRecruiting, setIsRecruiting] = useState<boolean>(false);
    return (
        <Border>
            <Content>
                <ClubName>동아리 명</ClubName>
                <CategoryName>카테고리</CategoryName>
            </Content>
            {isRecruiting ? (
                <Ing onClick={() => setIsRecruiting(false)}>모집 중</Ing>
            ) : (
                <Done onClick={() => setIsRecruiting(true)}>모집 마감</Done>
            )}
        </Border>
    );
};

export default Card;

const Border = styled.li`
    display: flex;
    width: 320px;
    height: 101px;
    background-color: #ffffff;
    list-style: none;
    border-radius: 10px;
    border: 1px solid #f4f4f4;
    padding: 24px;
    gap: 10px;
    justify-content: space-between;
`;

const Content = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: left;
`;

const ClubName = styled.h1`
    font-size: 19px;
    font-weight: bold;
`;

const CategoryName = styled.h2`
    color: #8e8e8e;
    font-size: 17px;
    font-weight: 400;
`;

const Done = styled.button`
    background-color: #ecececcc;
    color: #b6b6b6;
    border-radius: 5px;
    width: 80px;
    height: 35px;
    align-items: center;
`;

const Ing = styled.button`
    background-color: #d4e1ff;
    color: #6080cb;
    border-radius: 5px;
    width: 66px;
    height: 35px;
    align-items: center;
`;

"use client";

import { Container } from "@/component/common/Container";
import { clubInformation } from "@/constants/club";
import { crapas } from "@/constants/mocks";
import { theme } from "@/styles/theme";
import React from "react";
import styled from "styled-components";

type props = {
    params: {
        id: string;
    };
};
const page = ({ params }: props) => {
    const decoded = decodeURI(params.id);
    return (
        <Container>
            <ProfileContainer>
                <ProfileOutLine>
                    <OutLineBlock>
                        <ClubLogo></ClubLogo>
                        <NameAndCat>
                            <ClubName>동아리 명</ClubName>
                            <CategoryTag>카테고리</CategoryTag>
                        </NameAndCat>
                    </OutLineBlock>
                    <RecruitBlock>모집마감</RecruitBlock>
                </ProfileOutLine>
                <ClubInformation>
                    <InforationTitle>
                        {clubInformation.map((e, i) => {
                            return <h1 key={i}>{e}</h1>;
                        })}
                    </InforationTitle>
                    <InformationDetail>
                        {Object.entries(crapas).map(([key, value]) => {
                            return <h2 key={key}>{value}</h2>;
                        })}
                    </InformationDetail>
                </ClubInformation>
                <IntroduceBlock>동아리 소개</IntroduceBlock>
                <ClubIntroduce>소개글</ClubIntroduce>
            </ProfileContainer>
        </Container>
    );
};

export default page;

const ProfileContainer = styled.div`
    padding-top: 64px;
    width: 100%;
    display: flex;
    gap: 64px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const ProfileOutLine = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const OutLineBlock = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    gap: 35px;
    @media (max-width: ${{ theme }.theme.device.mobile}) {
        gap: 5px;
    }
`;

const NameAndCat = styled.div`
    display: flex;
    flex-direction: column;
`;

const ClubName = styled.h1`
    font-size: 19px;
    font-weight: 400;
    text-align: left;
`;
const CategoryTag = styled.h2`
    font-size: 17px;
    font-weight: 400;
    text-align: left;
    color: #8e8e8e;
`;

const ClubLogo = styled.div`
    background-color: #d9d9d9;
    width: 100px;
    height: 100px;
    overflow: hidden;
    border-radius: 50%;
`;

const RecruitBlock = styled.div`
    @media (max-width: ${{ theme }.theme.device.mobile}) {
        width: fit-content;
        height: fit-content;
    }
    padding: 8px 12px;
    width: 170px;
    height: 50px;
    text-align: center;
    align-content: center;
    max-height: 50px;
    border-radius: 5px;
    background-color: rgba(204, 204, 204, 0.8);
    color: ${{ theme }.theme.colors.darkGray};
`;
// 여기까지 로고, 이름, 카테고리, 모집마감 --------------------------------------------

const ClubInformation = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 40px;
`;

const InforationTitle = styled.div`
    width: 90px;
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-size: 17px;
    color: ${{ theme }.theme.colors.darkGray};
`;

const InformationDetail = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    font-size: 17px;
`;

const IntroduceBlock = styled.div`
    text-align: center;
    color: #31a6ec;
    font-size: 24px;
    font-weight: 500;
    width: 100%;
    height: 61px;
    padding: 16px 10px 16px 10px;
    gap: 10px;
    border-radius: 12px 12px;
    border: 1px;
    background: #f3f4f6;
    border-bottom: 1px solid #31a6ec;
`;

const ClubIntroduce = styled.div``;

import { theme } from "@/styles/theme";
import { styled } from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 896px;
    height: 100%;
    padding-top: 96px;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    overflow: hidden;
    @media (max-width: ${{ theme }.theme.device.mobile}) {
        padding: 64px 24px;
    }
    @media (min-width: ${{ theme }.theme.device.desktop}) {
    }
`;

import React from "react";
import styled from "styled-components";
import SearchIcon from "@/assets/images/SearchIcon.svg";

const CategoryInput = () => {
    return (
        <SearchContainer>
            <SearchInput />
            <SearchIcon />
        </SearchContainer>
    );
};

export default CategoryInput;

const SearchContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: self-end;
    width: 350px;
    height: 50px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 12px;
    border: 1px solid #c6c6c6;
`;
const SearchInput = styled.input`
    height: 40px;
    border-radius: 12px;
    outline: none;
`;

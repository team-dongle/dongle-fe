import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import SearchIcon from "@/assets/images/SearchIcon.svg";
import { theme } from "@/styles/theme";

type props = {
    setInputValue: Dispatch<SetStateAction<string>>;
};
const CategoryInput = ({ setInputValue }: props) => {
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    return (
        <SearchContainer onSubmit={handleSubmit}>
            <SearchInput onChange={handleInputChange} />
            <button>
                <SearchIcon />
            </button>
        </SearchContainer>
    );
};

export default CategoryInput;

const SearchContainer = styled.form`
    @media (max-width: ${{ theme }.theme.device.laptop}) {
        align-self: center;
    }
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

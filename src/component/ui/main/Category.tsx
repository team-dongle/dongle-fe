import { categoryList } from "@/constants/categoryList";
import { filterOptions } from "@/types/main";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface props {
    filterOptions: filterOptions;
    setState: Dispatch<SetStateAction<filterOptions>>;
}
const Category = ({ filterOptions, setState }: props) => {
    const setCategory = (category: string) => {
        if (category == "전체") {
            console.log(filterOptions);
            setState((prev) => ({
                ...prev,
                category: categoryList,
            }));
            if (filterOptions.category.includes("전체"))
                setState((prev) => ({
                    ...prev,
                    category: [],
                }));
        } else
            setState((prev) => ({
                ...prev,
                category: prev.category.includes(category)
                    ? prev.category.filter((c) => c !== category)
                    : [...prev.category, category],
            }));
    };

    return (
        <CategoryUl>
            {categoryList.map((category, index) => {
                return (
                    <React.Fragment key={category + index}>
                        <CategoryLi
                            onClick={() => setCategory(category)}
                            $isSelected={
                                filterOptions == null
                                    ? false
                                    : filterOptions.category?.includes(category)
                            }
                        >
                            {category}
                        </CategoryLi>
                        <Line>{index < categoryList.length - 1 && <>|</>}</Line>
                    </React.Fragment>
                );
            })}
        </CategoryUl>
    );
};

export default Category;

const CategoryUl = styled.ul`
    @media (max-width: 768px) {
        display: none;
    }
    font-size: 17px;
    color: #555555;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const CategoryLi = styled.li<{ $isSelected: boolean }>`
    padding-left: 16px;
    padding-right: 16px;
    white-space: nowrap;
    cursor: pointer;
    color: ${({ $isSelected }) => ($isSelected ? "#1D1D1D" : "#555555")};
    font-weight: ${({ $isSelected }) => ($isSelected ? 700 : 400)};
`;

const Line = styled.div`
    color: #c6c6c6;
`;

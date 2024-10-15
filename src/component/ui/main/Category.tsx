import { categoryList } from "@/constants/categoryList";
import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";

interface props {
    categoryState: number[];
    setState: Dispatch<SetStateAction<number[]>>;
}
const Category = ({ categoryState, setState }: props) => {
    const setCategory = (index: number) => {
        if (index == 0) {
            //전체 클릭 시
            console.log(categoryState[0]);
            if (categoryState[0] !== undefined) setState([]);
            else setState(Array.from({ length: 8 }, (_, index) => index));
        } else if (categoryState?.includes(index)) {
            setState((prev) => prev!.filter((e) => e !== index));
        } else {
            setState((prev) => [...prev!, index]);
        }
    };
    return (
        <CategoryUl>
            {categoryList.map((e, index) => {
                return (
                    <React.Fragment key={e + index}>
                        <CategoryLi
                            onClick={() => setCategory(index)}
                            $isSelected={
                                categoryState == null
                                    ? false
                                    : categoryState?.includes(index)
                            }
                        >
                            {e}
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

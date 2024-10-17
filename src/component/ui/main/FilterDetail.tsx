import React, {
    Dispatch,
    ForwardedRef,
    forwardRef,
    SetStateAction,
} from "react";
import styled from "styled-components";
import CloseButton from "@/assets/images/CloseButton.svg";
import { categoryList } from "@/constants/categoryList";
import { filterOptions } from "@/types/main";
import CheckIcon from "@/assets/images/CheckIcon.svg";

type props = {
    closeModal: () => void;
    filterOptions: filterOptions;
    setCategory: (category: string) => void;
    setRecruiting: () => void;
    setNonRecruit: () => void;
    setFilterOptions: Dispatch<SetStateAction<filterOptions>>;
};

const FilterDetail = (
    {
        closeModal,
        filterOptions,
        setCategory,
        setRecruiting,
        setNonRecruit,
        setFilterOptions,
    }: props,
    ref: ForwardedRef<HTMLDivElement>,
) => {
    const CategoryCheckbox = (category: string) => {
        return (
            <CheckBoxLabel key={category}>
                <HiddenCheckbox onChange={() => setCategory(category)} />
                <StyledCheckbox
                    checked={filterOptions.category.includes(category)}
                >
                    {filterOptions.category.includes(category) && <CheckIcon />}
                </StyledCheckbox>
                {category}
            </CheckBoxLabel>
        );
    };

    const reset = () => {
        setFilterOptions({
            category: [],
            isRecruit: null,
        });
    };

    return (
        <FilterContainer>
            <Content ref={ref}>
                <Edge>
                    필터
                    <CloseButton onMouseDown={closeModal} />
                </Edge>
                <MainFilter>
                    <Option>카테고리</Option>
                    <SubTitle>중복으로 선택할 수 있어요.</SubTitle>
                    <Section>
                        {categoryList.map((e) => {
                            return CategoryCheckbox(e);
                        })}
                    </Section>
                    <BorderLine />
                    <Option>모집여부</Option>
                    <Section>
                        <CheckBoxLabel>
                            <HiddenCheckbox onChange={setRecruiting} />
                            <StyledCheckbox
                                checked={filterOptions.isRecruit == true}
                            >
                                {filterOptions.isRecruit && <CheckIcon />}
                            </StyledCheckbox>
                            모집중
                        </CheckBoxLabel>
                        <CheckBoxLabel>
                            <HiddenCheckbox onChange={setNonRecruit} />
                            <StyledCheckbox
                                checked={filterOptions.isRecruit == false}
                            >
                                {filterOptions.isRecruit == false && (
                                    <CheckIcon />
                                )}
                            </StyledCheckbox>
                            모집마감
                        </CheckBoxLabel>
                    </Section>
                </MainFilter>
                <Edge>
                    <Reset onClick={reset}>초기화</Reset>
                    <Apply onMouseDown={closeModal}>필터 적용</Apply>
                </Edge>
            </Content>
        </FilterContainer>
    );
};

export default forwardRef(FilterDetail);

const FilterContainer = styled.div`
    @media (max-width: 640px) {
        background-color: rgba(0, 0, 0, 0);
        width: 100%;
        bottom: 0;
        top: auto;
        align-items: end;
    }
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
`;

const Content = styled.div`
    width: 500px;
    background-color: white;
    box-shadow: 0px 22px 60px -12px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
`;

const Edge = styled.div`
    padding: 16px 24px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #f0f0f0;
`;

const MainFilter = styled.div`
    padding: 24px 24px;
    gap: 8px;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;

const Option = styled.h2`
    font-size: 17px;
`;

const SubTitle = styled.h3`
    font-size: 15px;
    color: #8e8e8e;
`;

const Section = styled.section`
    padding-top: 16px;
    padding-bottom: 16px;
    gap: 12px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
`;

const BorderLine = styled.div`
    border-top: 1px solid #f0f0f0;
    margin-bottom: 16px;
`;
const CheckBoxLabel = styled.label`
    font-size: 17px;
    gap: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;
`;
const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
    opacity: 0;
    position: absolute;
    pointer-events: none;
`;

const StyledCheckbox = styled.span<{ checked: boolean }>`
    width: 16px;
    height: 16px;
    background: ${(props) => (props.checked ? "#189DED" : "#D8D8D8")};
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 150ms;
`;

const Reset = styled.button`
    color: #9c9c9c;
`;
const Apply = styled.button`
    padding: 8px 10px;
    background-color: #189ded;
    color: white;
    border-radius: 4px;
`;

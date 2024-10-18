import React, { Dispatch, SetStateAction } from "react";
import FilterIcon from "@/assets/images/FilterIcon.svg";
import styled from "styled-components";
import useModal from "@/hooks/useModal";
import FilterDetail from "./FilterDetail";
import { filterOptions } from "@/types/main";

type props = {
    filterOptions: filterOptions;
    setCategory: (category: string) => void;
    setRecruiting: () => void;
    setNonRecruit: () => void;
    setFilterOptions: Dispatch<SetStateAction<filterOptions>>;
};
const Filter = ({
    filterOptions,
    setCategory,
    setRecruiting,
    setNonRecruit,
    setFilterOptions,
}: props) => {
    const { visible, modalRef, closeModal, openModal } = useModal();
    return (
        <FilterContainer onClick={openModal}>
            필터
            <FilterIcon />
            {visible && (
                <FilterDetail
                    filterOptions={filterOptions}
                    setCategory={setCategory}
                    setRecruiting={setRecruiting}
                    setNonRecruit={setNonRecruit}
                    setFilterOptions={setFilterOptions}
                    closeModal={closeModal}
                    ref={modalRef}
                />
            )}
        </FilterContainer>
    );
};

export default Filter;

const FilterContainer = styled.div`
    @media (max-width: ${({ theme }) => theme.device.laptop}) {
        color: ${({ theme }) => theme.device.darkGray};
    }
    cursor: pointer;
    color: ${({ theme }) => theme.device.black};
    gap: 2px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
`;

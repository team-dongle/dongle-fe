import React from "react";
import FilterIcon from "@/assets/images/FilterIcon.svg";
import styled from "styled-components";
import useModal from "@/hooks/userModal";

const Filter = () => {
    const { visible, modalRef, toggleModal, closeModal, openModal } =
        useModal();
    return (
        <FilterContainer ref={modalRef} onClick={openModal}>
            필터
            <FilterIcon />
        </FilterContainer>
    );
};

export default Filter;

const FilterContainer = styled.div`
    @media (max-width: 768px) {
        color: #555555;
    }
    cursor: pointer;
    color: #1d1d1d;
    gap: 2px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
`;

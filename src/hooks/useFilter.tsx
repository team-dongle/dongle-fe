import { useState } from "react";
import { filterOptions } from "@/types/main";
import { categoryList } from "@/constants/categoryList";

export function useFilter() {
    const [filterOptions, setFilterOptions] = useState<filterOptions>({
        category: [],
        isRecruit: null,
    });

    const setRecruiting = () => {
        setFilterOptions((prev) => ({
            ...prev,
            isRecruit: true,
        }));
    };

    const setNonRecruiting = () => {
        setFilterOptions((prev) => ({
            ...prev,
            isRecruit: false,
        }));
    };

    const toggleRecruit = () => {
        setFilterOptions((prev) => ({
            ...prev,
            isRecruit: !filterOptions.isRecruit,
        }));
    };

    const setCategory = (category: string) => {
        if (category == "전체") {
            setFilterOptions((prev) => ({
                ...prev,
                category: categoryList,
            }));
            if (filterOptions.category.includes("전체"))
                setFilterOptions((prev) => ({
                    ...prev,
                    category: [],
                }));
        } else
            setFilterOptions((prev) => ({
                ...prev,
                category: prev.category.includes(category)
                    ? prev.category.filter((c) => c !== category)
                    : [...prev.category, category],
            }));
    };

    return {
        filterOptions,
        setFilterOptions,
        setCategory,
        setRecruiting,
        setNonRecruiting,
        toggleRecruit,
    };
}

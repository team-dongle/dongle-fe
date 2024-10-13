import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";

const Header = () => {
    return (
        <header className="fixed border-b border-gray-headerLine top-0 left-0 w-full h-16 bg-gray-50 z-50 hidden md:block">
            <div className="flex items-center justify-between space-x-4 px-64 h-full">
                <Logo />
                <div className="font-pretendard flex space-x-16 text-gray-header">
                    <h2>공지사항</h2>
                    <h2>문의하기</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;

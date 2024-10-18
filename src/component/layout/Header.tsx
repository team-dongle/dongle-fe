import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed border-b border-gray-headerLine w-full px-64 h-16 bg-gray-50 z-50 hidden md:block">
            <div className="flex items-center justify-between space-x-4 h-full">
                <Link href="/">
                    <Logo />
                </Link>
                <div className="font-pretendard w-40 flex justify-between space-x-4 text-gray-header">
                    <Link href="/notice" className="whitespace-nowrap">
                        공지사항
                    </Link>
                    <h2 className="whitespace-nowrap">문의하기</h2>
                </div>
            </div>
        </header>
    );
};

export default Header;

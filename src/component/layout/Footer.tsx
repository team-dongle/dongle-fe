import React from "react";
import Image from "next/image";
import Logo from "@/assets/images/logo.svg";

const Footer = () => {
    return (
        <footer className="text-whiteflex w-full justify-center bg-gray-100 mt-24">
            <div className="w-full max-w-6xl px-6 py-8 md:px-64 md:py-10">
                <Logo />
                <div className="text-xs text-sm text-gray-footer md:text-sm">
                    Contact: team.dongle@gmail.com <br />
                    Copyright ⓒ by dongle.All Rights Reserved
                </div>
            </div>
        </footer>
    );
};

export default Footer;

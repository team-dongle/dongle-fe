import "@/styles/globals.css";
import Footer from "@/component/layout/Footer";
import Header from "@/component/layout/Header";
import StyledComponentsRegistry from "@/lib/registry";
import localFont from "next/font/local";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "동글",
    description: "순천대학교 동아리",
};
const pretendard = localFont({
    src: "../assets/fonts/PretendardVariable.woff2",
    display: "swap",
    weight: "45 920",
    variable: "--font-pretendard",
});

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="kr" className={`${pretendard.variable}`}>
            <body className={pretendard.className}>
                <StyledComponentsRegistry>
                    <Header />
                    <div className="min-h-screen md:h-screen">{children}</div>
                    <Footer />
                </StyledComponentsRegistry>
            </body>
        </html>
    );
}

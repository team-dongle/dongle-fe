import StyledComponentsRegistry from "@/lib/registry";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "동글",
    description: "순천대학교 동아리",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>
                <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
            </body>
        </html>
    );
}

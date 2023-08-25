import type { Metadata } from "next";

import "./globals.css";

import { DM_Sans } from "next/font/google";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
    title: "Utsav Gurmachhan Magar",
    description: "Utsav Gurmachhan Magar is a Software Engineer from Nepal.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={dmSans.className}>{children}</body>
        </html>
    );
}

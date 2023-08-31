import type { Metadata } from "next";
import Script from "next/script";
import { useEffect } from "react";

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
            <body className={`${dmSans.className}`}>
                <Script
                    strategy="afterInteractive"
                    dangerouslySetInnerHTML={{
                        __html: `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "impchiwk8z");`,
                    }}
                    id={"ms-clarity"}
                />
                {children}
            </body>
        </html>
    );
}

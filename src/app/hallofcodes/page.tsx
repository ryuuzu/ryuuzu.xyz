"use client";

import { Header } from "@/components/Header";
import Loading from "@/components/Loading";
import { Sidebar } from "@/components/Sidebar";
import { RyuuApiService } from "@/services/RyuuApiService";
import { Fira_Code } from "next/font/google";
import { useEffect, useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import {
    atomDark,
    dracula,
    oneDark,
} from "react-syntax-highlighter/dist/esm/styles/prism";

import { CodeAward } from "../../../@types/CodeAward";

const firaCode = Fira_Code({
    subsets: [
        "cyrillic",
        "cyrillic-ext",
        "greek",
        "greek-ext",
        "latin",
        "latin-ext",
    ],
    weight: "variable",
});

const codeStyles = [
    {
        id: "dracula",
        name: "Dracula",
        style: dracula,
    },
    {
        id: "atom-dark",
        name: "Atom Dark",
        style: atomDark,
    },
    {
        id: "one-dark",
        name: "One Dark",
        style: oneDark,
    },
];

export default function HallOfCodes() {
    const [currentCodeStyle, setCurrentCodeStyle] = useState(codeStyles[0]);

    const [codeAwards, setCodeAwards] = useState<CodeAward[]>([]);
    const [isCodeAwardsLoading, setIsCodeAwardsLoading] = useState(true);

    useEffect(() => {
        const ryuuApiService = new RyuuApiService();
        ryuuApiService
            .getCodeAwards()
            .then((codeAwards) => {
                setCodeAwards(codeAwards);
                setIsCodeAwardsLoading(false);
            })
            .catch((error) => {
                setIsCodeAwardsLoading(false);
            });
    }, []);

    return (
        <main
            className={`flex min-h-screen w-full flex-col items-center sm:items-stretch md:flex-row`}
        >
            <div className="w-full flex-grow overflow-auto bg-white px-5 py-3 text-primary sm:min-h-screen sm:py-10 md:max-h-screen md:w-3/5 scrollbar-thumb-primary scrollbar-thin scrollbar-thumb-rounded-full">
                <Header
                    title="Utsav Gurmachhan Magar"
                    subTitle="Hall of Codes"
                />
                <div className="code-awards">
                    {isCodeAwardsLoading ? (
                        <Loading />
                    ) : codeAwards.length >= 1 ? (
                        <ol className="list-decimal mt-4 lg:mt-8">
                            {codeAwards.map((codeAward) => (
                                <li key={codeAward.id}>
                                    <h1 className="font-bold text-lg">
                                        {codeAward.title}
                                    </h1>
                                    <div
                                        className="text-xs md:text-sm"
                                        dangerouslySetInnerHTML={{
                                            __html: codeAward.description,
                                        }}
                                    ></div>
                                    <div
                                        className={`whitespace-pre-wrap relative text-xs`}
                                    >
                                        <SyntaxHighlighter
                                            language={codeAward.language}
                                            codeTagProps={{
                                                style: firaCode.style,
                                            }}
                                            style={currentCodeStyle.style}
                                            showLineNumbers
                                            // wrapLongLines
                                        >
                                            {codeAward.codeBlock}
                                        </SyntaxHighlighter>
                                        <select
                                            name="currentCodeStyle"
                                            className="absolute right-4 top-2 rounded-md z-10"
                                            id="code-style"
                                            value={currentCodeStyle.id}
                                            onChange={(event) =>
                                                setCurrentCodeStyle(
                                                    codeStyles.filter(
                                                        (codeStyle) =>
                                                            codeStyle.id ===
                                                            event.target.value
                                                    )[0]
                                                )
                                            }
                                        >
                                            {codeStyles.map((codeStyle) => (
                                                <option
                                                    value={codeStyle.id}
                                                    key={codeStyle.id}
                                                >
                                                    {codeStyle.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <div className="text-center">
                            No code block has been good enough to receive a spot
                            in the Hall of Codes.
                        </div>
                    )}
                </div>
            </div>
            <Sidebar>
                Hi, I see you have made it into the Hall of Codes of my website.
                So, <strong>Welcome to the Hall of Codes</strong>. This area is
                a display of all the complex, tricky, fun or janky code that I
                have written on my journey as a developer.
            </Sidebar>
        </main>
    );
}

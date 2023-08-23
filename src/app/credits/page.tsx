"use client";

import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";

export default function Credits() {
    return (
        <main
            className={`flex min-h-screen w-full flex-col items-center sm:items-stretch md:flex-row`}
        >
            <div className="w-full flex-grow overflow-auto bg-white px-5 py-3 text-primary sm:min-h-screen sm:py-10 md:max-h-screen md:w-3/5">
                <Header
                    title="Utsav Gurmachhan Magar"
                    subTitle="Website Credits"
                />
            </div>
            <Sidebar>Test</Sidebar>
        </main>
    );
}

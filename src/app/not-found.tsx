"use client";

import { RyuuApiService } from "@/services/RyuuApiService";
import { NotFoundCounter } from "@/types/NotFoundCounter";
import { Cute_Font, Noto_Sans_Javanese } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const notoSansJavanese = Noto_Sans_Javanese({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const cuteFont = Cute_Font({
    weight: "400",
    subsets: ["latin"],
});

export default function NotFound() {
    const ryuuApiService = new RyuuApiService();

    const [notFoundData, setNotFoundData] = useState<NotFoundCounter | null>(
        null
    );

    useEffect(() => {
        ryuuApiService
            .getNotFoundCounterData()
            .then((counterData) => {
                setNotFoundData(counterData);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-primary relative">
            <h2
                className={`${notoSansJavanese.className} text-6xl font-bold mb-4 relative after:content-['(404)'] after:absolute after:-bottom-2 after:left-1/2 after:text-xs after:-translate-x-1/2`}
            >
                四百四
            </h2>
            <div
                className={`w-3/4 lg:w-1/2 text-center text-xl lg:text-3xl ${cuteFont.className}`}
            >
                Looks like you have wandered too far and got lost on the way.{" "}
                {notFoundData ? (
                    <>
                        Over {notFoundData.not_found_count - 1} souls have
                        wandered to this section and never returned. You are the{" "}
                        {notFoundData.not_found_count ?? 0}
                        <span className="align-super text-base lg:text-lg">
                            th
                        </span>{" "}
                        soul to wander here.{" "}
                    </>
                ) : (
                    <>
                        We have lost count of the souls that have wandered to
                        this section and never returned.{" "}
                    </>
                )}
                You can either return to the{" "}
                <Link
                    href="/"
                    className="underline decoration-dotted underline-offset-4"
                >
                    home
                </Link>{" "}
                or continue wandering.
            </div>
            <div className="absolute bottom-0 px-2 pb-1 sm:pb-2 sm:px-0 text-2xs sm:text-xs text-secondary text-center">
                <div>
                    This page collects your user agent and public IP address to
                    keep count of the total souls that have wandered upon this
                    space.
                </div>
                <div>
                    User Agent: {notFoundData?.user_agent} | IP Address:{" "}
                    {notFoundData?.ip_address}
                </div>
            </div>
        </div>
    );
}

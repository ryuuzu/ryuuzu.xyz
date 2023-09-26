"use client";

import { Header } from "@/components/Header";
import Loading from "@/components/Loading";
import { Sidebar } from "@/components/Sidebar";
import { RyuuApiService } from "@/services/RyuuApiService";
import { Credit } from "@/types/Credit";
import { ArrowBlCircle } from "iconoir-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Credits() {
    const [credits, setCredits] = useState<Credit[]>([]);
    const [isCreditsLoading, setIsCreditsLoading] = useState(true);

    useEffect(() => {
        const ryuuApiService = new RyuuApiService();
        ryuuApiService
            .getCredits()
            .then((credits) => {
                setCredits(credits);
                setIsCreditsLoading(false);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    return (
        <main
            className={`flex min-h-screen w-full flex-col items-center sm:items-stretch md:flex-row`}
        >
            <div className="w-full flex-grow overflow-auto bg-white px-5 py-3 text-primary sm:min-h-screen sm:py-10 md:max-h-screen md:w-3/5 scrollbar-thumb-primary scrollbar-thin scrollbar-thumb-rounded-full">
                <Header title="Utsav Gurmachhan Magar" subTitle="Credits" />
                <div className="credits">
                    {isCreditsLoading ? (
                        <Loading />
                    ) : credits.length >= 1 ? (
                        <ol className="list-decimal mt-4 lg:mt-8">
                            {credits.map((credit) => (
                                <li key={`${credit.title}-${credit.link}`}>
                                    <h1 className="font-bold text-lg">
                                        {credit.title}
                                    </h1>
                                    <div
                                        className="text-xs md:text-sm"
                                        dangerouslySetInnerHTML={{
                                            __html: credit.description,
                                        }}
                                    ></div>
                                    <a
                                        href={credit.link}
                                        className="group flex items-center gap-1 hover:underline text-xs md:text-sm"
                                        target="_blank"
                                    >
                                        Checkout the website{" "}
                                        <ArrowBlCircle className="transition-transform duration-300 group-hover:rotate-180" />
                                    </a>
                                    {credit.images?.length > 0 && (
                                        <div className="grid grid-cols-2 gap-x-2 gap-y-1">
                                            {credit.images.map((image) => (
                                                <Image
                                                    width={100}
                                                    height={100}
                                                    key={image.title}
                                                    src={image.image}
                                                    alt={image.alt}
                                                    className="w-full mt-2 aspect-video object-contain object-center"
                                                    unoptimized
                                                />
                                            ))}
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ol>
                    ) : (
                        <div className="text-center mt-4 ">
                            Credits are missing somehow. I indeed have cited the
                            references properly. Please do not report me for
                            plagiarims. The backend server is most likely down.
                            Please try again later.
                        </div>
                    )}
                </div>
            </div>
            <Sidebar>
                Whoa, you clicked on the Credits section. So,{" "}
                <strong>Welcome to the Credits</strong>. Here, I will share all
                the strange ingredients curated by your one and only,{" "}
                <span className="text-tertiary">ryuuzu</span>, for cooking this
                website up. Also thank you to all the creators and developers of
                the amazing packages/APIs used in this website. You are all the
                real hero here. Thanks a lot.
            </Sidebar>
        </main>
    );
}

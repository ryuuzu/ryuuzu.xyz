import {
    Copyright,
    DownloadCircle,
    Home,
    Medal1St,
    PinAlt,
    Spotify,
} from "iconoir-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Progress } from "react-sweet-progress";

import "react-sweet-progress/lib/style.css";

import { useLanyard } from "react-use-lanyard";

export function Sidebar({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const { loading, status } = useLanyard({
        userId: "331829647568535563",
        socket: true,
    });

    const PageLink = ({
        href,
        children,
    }: {
        href: string;
        children: React.ReactNode;
    }) => (
        <Link
            href={href}
            className="flex flex-row items-center gap-1 w-1/4 justify-center hover:bg-secondary py-2 rounded-md transition-colors duration-300"
        >
            {children}
        </Link>
    );

    const navigationLinks: { href: string; component: JSX.Element }[] = [
        {
            href: "/",
            component: (
                <>
                    <Home /> <span className="text-sm">Home</span>
                </>
            ),
        },
        {
            href: "/hallofcodes",
            component: (
                <>
                    <Medal1St /> <span className="text-sm">Hall of Codes</span>
                </>
            ),
        },
        {
            href: "/credits",
            component: (
                <>
                    <Copyright /> <span className="text-sm">Credits</span>
                </>
            ),
        },
        {
            href: "/cv",
            component: (
                <>
                    <DownloadCircle /> <span className="text-sm">Resume</span>
                </>
            ),
        },
    ];

    return (
        <div className="w-full bg-primary px-5 py-8 text-base text-white sm:min-h-screen sm:py-10 md:max-h-screen md:w-2/5 md:text-sm lg:text-base overflow-auto">
            <div>{children}</div>
            <div className="flex flex-row justify-between text-xl mt-5">
                {navigationLinks
                    .filter(
                        (navigationLink) => navigationLink.href !== pathname
                    )
                    .map((navigationLink) => (
                        <PageLink
                            href={navigationLink.href}
                            key={navigationLink.href}
                        >
                            {navigationLink.component}
                        </PageLink>
                    ))}
            </div>
            <a
                href="https://goo.gl/maps/JdGHKxArPFvGGv6w7"
                className="my-5 flex flex-row items-center gap-2 text-tertiary transition-colors duration-300 hover:text-slate-300"
                target="_blank"
            >
                <PinAlt /> <div>Chandragiri, Kathmandu, Nepal</div>
            </a>
            {!loading && status?.activities ? (
                <>
                    <h1 className="pb-1 text-lg font-bold text-tertiary sm:pb-2 sm:text-xl">
                        {status?.activities.length > 1
                            ? "Current Activities"
                            : "Current Activity"}
                    </h1>
                    {status?.activities.filter((activity) =>
                        activity.name.includes("Spotify")
                    ).length > 0 && (
                        <>
                            {status?.activities
                                .filter((activity) =>
                                    activity.name.includes("Spotify")
                                )
                                .map((activity) => (
                                    <div
                                        key={activity.id}
                                        className="flex flex-row items-center gap-2 md:gap-4"
                                    >
                                        <Spotify className="h-full text-xl md:text-2xl" />
                                        <div className="song-details w-full h-fit flex flex-row justify-between items-center">
                                            <a
                                                href={
                                                    "https://open.spotify.com/track/" +
                                                    status.spotify?.track_id
                                                }
                                            >
                                                <div className="song-title text-lg font-bold">
                                                    {activity.details}
                                                </div>
                                                <div className="artist-name text-sm">
                                                    {activity.state.replaceAll(
                                                        ";",
                                                        ","
                                                    )}
                                                </div>
                                            </a>
                                            <div className="song-progres max-h-full">
                                                <Progress
                                                    type="circle"
                                                    percent={
                                                        ((currentTime.getTime() -
                                                            activity.timestamps
                                                                ?.start!) /
                                                            (activity.timestamps
                                                                ?.end! -
                                                                activity
                                                                    .timestamps
                                                                    ?.start!)) *
                                                        100
                                                    }
                                                    width={50}
                                                    theme={{
                                                        success: {
                                                            symbol: (
                                                                <Image
                                                                    src={
                                                                        status
                                                                            .spotify
                                                                            ?.album_art_url ||
                                                                        "💿"
                                                                    }
                                                                    width={50}
                                                                    height={50}
                                                                    className="rounded-full ring-tertiary ring-2"
                                                                    alt="Current Playing Album Art"
                                                                />
                                                            ),
                                                            color: "white",
                                                            trailColor:
                                                                "#B4B8C635",
                                                        },
                                                    }}
                                                    symbolClassName={
                                                        "animate-spin-slow"
                                                    }
                                                    status={"success"}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </>
                    )}
                    <pre>
                        {JSON.stringify(
                            status?.activities.filter(
                                (activity) => !activity.name.includes("Spotify")
                            ),
                            null,
                            4
                        )}
                    </pre>
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

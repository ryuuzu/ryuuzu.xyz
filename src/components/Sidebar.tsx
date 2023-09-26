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

import { getIconFromDiscordActivity } from "@/utils/GetIconFromDiscordActivity";
import { formatDistanceToNow } from "date-fns";
import { useLanyard } from "react-use-lanyard";

import { PrimaryCvSeparator, SecondaryCvSeparator } from "./CvSeparator";

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
                    {status?.activities.length > 0 && (
                        <>
                            <PrimaryCvSeparator />
                            <h1 className="pb-1 text-lg font-bold text-tertiary sm:pb-2 sm:text-xl">
                                {status?.activities.length > 1
                                    ? "Current Activities"
                                    : "Current Activity"}
                            </h1>
                            {status?.activities
                                .filter((activity) =>
                                    activity.name.includes("Spotify")
                                )
                                .map((activity) => (
                                    <div
                                        key={activity.id}
                                        className="flex flex-row items-center gap-2 md:gap-4"
                                    >
                                        {getIconFromDiscordActivity(
                                            activity.name,
                                            "h-full text-xl md:text-2xl"
                                        )}
                                        <div className="song-details w-full h-fit flex flex-row justify-between items-center">
                                            <div className="song-info flex flex-col gap-1">
                                                <a
                                                    className="song-title text-lg font-bold cursor-pointer hover:underline"
                                                    href={
                                                        "https://open.spotify.com/track/" +
                                                        status.spotify?.track_id
                                                    }
                                                    target="_blank"
                                                >
                                                    {activity.details}
                                                </a>
                                                <div className="artist-name text-sm">
                                                    {activity.state.replaceAll(
                                                        ";",
                                                        ","
                                                    )}{" "}
                                                    (on{" "}
                                                    {
                                                        activity.assets
                                                            ?.large_text
                                                    }
                                                    )
                                                </div>
                                            </div>
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
                                                    width={60}
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
                            {status?.activities
                                .filter(
                                    (activity) =>
                                        !activity.name.includes("Spotify")
                                )
                                .map((activity, index) => (
                                    <div key={activity.id}>
                                        {(status?.activities.filter(
                                            (activity) =>
                                                activity.name.includes(
                                                    "Spotify"
                                                )
                                        ).length > 0 ||
                                            index !== 0) && (
                                            <SecondaryCvSeparator className="my-2 opacity-50 mx-5" />
                                        )}
                                        <div className="flex flex-row items-center gap-2 md:gap-4">
                                            {getIconFromDiscordActivity(
                                                activity.name,
                                                "h-full text-xl md:text-2xl"
                                            )}
                                            <div className="w-full h-fit flex flex-row justify-between items-center">
                                                <div>
                                                    <div className="text-lg font-bold">
                                                        {activity.name}
                                                    </div>
                                                    <div className="text-sm">
                                                        <div>
                                                            {activity.details ||
                                                                "Started " +
                                                                    formatDistanceToNow(
                                                                        new Date(
                                                                            activity
                                                                                .timestamps
                                                                                ?.start!
                                                                        ),
                                                                        {
                                                                            addSuffix:
                                                                                true,
                                                                        }
                                                                    )}
                                                        </div>
                                                    </div>
                                                    <div className="text-xs">
                                                        {activity.state && (
                                                            <div>
                                                                {activity.state}
                                                            </div>
                                                        )}
                                                        {activity.assets
                                                            ?.large_text && (
                                                            <span>
                                                                {
                                                                    activity
                                                                        .assets
                                                                        ?.large_text
                                                                }
                                                            </span>
                                                        )}
                                                        {activity.assets
                                                            ?.small_text && (
                                                            <>
                                                                {" "}
                                                                -{" "}
                                                                <span>
                                                                    {
                                                                        activity
                                                                            .assets
                                                                            ?.small_text
                                                                    }
                                                                </span>
                                                            </>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="max-h-full">
                                                    {activity.assets
                                                        ?.large_image &&
                                                    activity.application_id ===
                                                        "782685898163617802" ? (
                                                        <Image
                                                            src={
                                                                activity.assets
                                                                    ?.large_image
                                                                    ? "https://" +
                                                                      activity.assets?.large_image.split(
                                                                          "https/"
                                                                      )[1]
                                                                    : "💿"
                                                            }
                                                            width={60}
                                                            height={60}
                                                            className="rounded-full ring-tertiary ring-2"
                                                            alt="Current Playing Album Art"
                                                        />
                                                    ) : (
                                                        <></>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </>
                    )}
                </>
            ) : (
                <></>
            )}
        </div>
    );
}

import { Cute_Font, Noto_Sans_Javanese } from "next/font/google";
import Link from "next/link";

const notoSansJavanese = Noto_Sans_Javanese({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

const cuteFont = Cute_Font({
    weight: "400",
    subsets: ["latin"],
});

export default function NotFound() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-primary">
            <h2
                className={`${notoSansJavanese.className} text-6xl font-bold mb-4`}
            >
                四百四
            </h2>
            <div
                className={`w-3/4 lg:w-1/2 text-center text-xl lg:text-3xl ${cuteFont.className}`}
            >
                Looks like you have wandered too far and got lost on the way.
                Over 68 souls have wandered to this section and never returned.
                You are the 69
                <span className="align-super text-base lg:text-lg">
                    th
                </span>{" "}
                soul to wander here. You can either return to the{" "}
                <Link
                    href="/"
                    className="underline decoration-dotted underline-offset-4"
                >
                    home
                </Link>{" "}
                or continue wandering.
            </div>
        </div>
    );
}

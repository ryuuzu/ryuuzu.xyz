import { Copyright, DownloadCircle, Medal1St, PinAlt } from "iconoir-react";
import Link from "next/link";

export function Sidebar({ children }: { children: React.ReactNode }) {
    return (
        <div className="w-full bg-primary px-5 py-8 text-base text-white sm:min-h-screen sm:py-10 md:max-h-screen md:w-2/5 md:text-sm lg:text-base">
            <div>{children}</div>
            <div className="flex flex-row justify-between text-xl mt-5">
                <Link
                    href={"/hallofcodes"}
                    className="flex flex-row items-center gap-1 w-1/4 justify-center hover:bg-secondary py-2 rounded-md transition-colors duration-300"
                >
                    <Medal1St /> <span className="text-sm">Hall of Codes</span>
                </Link>
                <Link
                    href={"credits"}
                    className="flex flex-row items-center gap-1 w-1/4 justify-center hover:bg-secondary py-2 rounded-md transition-colors duration-300"
                >
                    <Copyright /> <span className="text-sm">Credits</span>
                </Link>
                <Link
                    href={"#"}
                    className="flex flex-row items-center gap-1 w-1/4 justify-center hover:bg-secondary py-2 rounded-md transition-colors duration-300"
                >
                    <DownloadCircle /> <span className="text-sm">Resume</span>
                </Link>
            </div>
            <a
                href="https://goo.gl/maps/JdGHKxArPFvGGv6w7"
                className="my-5 flex flex-row items-center gap-2 text-tertiary transition-colors duration-300 hover:text-slate-300"
                target="_blank"
            >
                <PinAlt /> <div>Chandragiri, Kathmandu, Nepal</div>
            </a>
        </div>
    );
}

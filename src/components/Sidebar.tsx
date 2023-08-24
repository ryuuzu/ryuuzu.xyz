import {
    Copyright,
    DownloadCircle,
    Home,
    Medal1St,
    PinAlt,
} from "iconoir-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function Sidebar({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();
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
        <div className="w-full bg-primary px-5 py-8 text-base text-white sm:min-h-screen sm:py-10 md:max-h-screen md:w-2/5 md:text-sm lg:text-base">
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
        </div>
    );
}

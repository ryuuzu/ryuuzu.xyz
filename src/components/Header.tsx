import { RyuuApiService } from "@/services/RyuuApiService";
import { useEffect, useState } from "react";

import { SocialLink } from "../../@types/SocialLink";
import { SocialLinks } from "./SocialLinks";

export const Header = ({
    title,
    subTitle,
}: {
    title: string;
    subTitle: string;
}) => {
    const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);
    const [isSocialLinksLoading, setIsSocialLinksLoading] =
        useState<boolean>(false);

    useEffect(() => {
        const ryuuApiService = new RyuuApiService();
        setIsSocialLinksLoading(true);
        ryuuApiService
            .getSocialLinks()
            .then((socialLinks) => {
                setSocialLinks(socialLinks);
                setIsSocialLinksLoading(false);
            })
            .catch((error) => {
                setIsSocialLinksLoading(false);
            });
    }, []);

    return (
        <div className="title-bar flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-0 md:flex-col lg:flex-row">
            <div className="header-text flex flex-row items-center gap-2 sm:flex-col sm:items-start sm:gap-1 md:flex-row md:items-center lg:flex-col lg:items-start">
                <div className="name text-sm font-bold xs:text-lg sm:text-xl md:text-lg lg:text-3xl">
                    {title}
                </div>
                <div className="separator block sm:hidden md:block lg:hidden">
                    |
                </div>
                <div className="position text-sm font-medium text-secondary xs:text-lg md:text-base lg:text-lg">
                    {subTitle}
                </div>
            </div>
            <SocialLinks socialLinks={socialLinks} />
        </div>
    );
};

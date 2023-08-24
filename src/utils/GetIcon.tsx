import {
    Discord,
    GitHub,
    Instagram,
    LinkedIn,
    Mail,
    TikTok,
    Twitter,
} from "iconoir-react";

export const getIcon = (iconName: string) => {
    switch (iconName) {
        case "mail":
            return <Mail />;
        case "github":
            return <GitHub />;
        case "linkedin":
            return <LinkedIn />;
        case "twitter":
            return <Twitter />;
        case "discord":
            return <Discord />;
        case "tiktok":
            return <TikTok />;
        case "instagram":
            return <Instagram />;
        default:
            return <Mail />;
    }
};

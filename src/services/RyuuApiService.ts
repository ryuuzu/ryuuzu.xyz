import { SocialLink } from "../../@types/SocialLink";

export class RyuuApiService {
    public async getSocialLinks(): Promise<SocialLink[]> {
        return [
            {
                href: "mailto:me@ryuuzu.xyz",
                component: "Mail",
                type: "mail",
            },
            {
                href: "https://github.com/ryuuzu",
                component: "GitHub",
                type: "github",
            },
            {
                href: "https://linkedin.com/in/utsavgurmachhan/",
                component: "LinkedIn",
                type: "linkedin",
            },
            {
                href: "https://twitter.com/UtsavGurmachhan/",
                component: "Twitter",
                type: "twitter",
            },
            {
                href: "https://discord.com/users/331829647568535563",
                component: "Discord",
                type: "discord",
            },
            {
                href: "https://tiktok.com/@ryuuzu3118",
                component: "TikTok",
                type: "tiktok",
            },

            {
                href: "https://instagram.com/ryuuzu3118",
                component: "Instagram",
                type: "instagram",
            },
        ];
    }
}

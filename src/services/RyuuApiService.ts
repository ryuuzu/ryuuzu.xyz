import { SocialLink } from "../../@types/SocialLink";

export class RyuuApiService {
    public async getSocialLinks(): Promise<SocialLink[]> {
        return [
            {
                href: "mailto:me@ryuuzu.xyz",
                type: "mail",
            },
            {
                href: "https://github.com/ryuuzu",
                type: "github",
            },
            {
                href: "https://linkedin.com/in/utsavgurmachhan/",
                type: "linkedin",
            },
            {
                href: "https://twitter.com/UtsavGurmachhan/",
                type: "twitter",
            },
            {
                href: "https://discord.com/users/331829647568535563",
                type: "discord",
            },
            {
                href: "https://tiktok.com/@ryuuzu3118",
                type: "tiktok",
            },

            {
                href: "https://instagram.com/ryuuzu3118",
                type: "instagram",
            },
        ];
    }
}

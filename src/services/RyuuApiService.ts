import { CodeAward } from "../../@types/CodeAward";
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

    public async getCodeAwards(): Promise<CodeAward[]> {
        return [
            {
                id: 1,
                title: "Navigation Creator Logic",
                language: "javascript",
                description:
                    "This was a code block was a part of my FYP (Final Year Project) in Islington College where I had to make sure that the navigation links would be shown according to the user type in the drawer. The links would either be available to all of the users or only uniquely accessible by the pre-defined user groups. My learning from this code logic/block was that unlike Python where <strong>None</strong> is automatically a false value when using within a logic JavaScript doesn't process <strong>undefined</strong> in the same way.",
                codeBlock:
                    '{\n	ALL_NAVIGATION_LINKS.map((navigationLink, index) => {\n		const userType = authed\n			? userDetails.user.user_type.toLowerCase()\n			: "unauthenticated";\n		if (\n			undefinedCheck(\n				navigationLink.allowed && navigationLink.allowed.includes("all")\n			) ||\n			undefinedCheck(\n				navigationLink.excluded\n					? !navigationLink.excluded.includes(userType)\n					: false\n			) ||\n			undefinedCheck(\n				navigationLink.allowed &&\n					navigationLink.allowed.includes(userType)\n			)\n		) {\n			return (\n				<NavListItem\n					key={index}\n					href={navigationLink.href}\n					icon={navigationLink.icon}\n					title={navigationLink.title}\n				/>\n			);\n		}\n	});\n}',
            },
        ];
    }
}

import { AcademicDegree } from "../../@types/AcademicDegree";
import { CodeAward } from "../../@types/CodeAward";
import { SocialLink } from "../../@types/SocialLink";
import { WorkExperience } from "../../@types/WorkExperience";

export class RyuuApiService {
    public async preApiCall(): Promise<void> {
        await new Promise((resolve) => setTimeout(resolve, 1000));
    }

    public async getSocialLinks(): Promise<SocialLink[]> {
        await this.preApiCall();
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
        await this.preApiCall();
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

    public async getAcademicDegrees(): Promise<AcademicDegree[]> {
        await this.preApiCall();
        return [
            {
                name: "B.Sc. (Hons) Computing",
                institution: "Islington College",
                type: "Bachelor's Degree",
                location: "Kamalpokhari, Kathmandu",
                website: "https://islington.edu.np/",
                major: "Computing",
                description: "Currently pursuing a degree in Computing.",
            },
            {
                name: "SLC",
                institution: "Moonlight Higher Secondary School",
                type: "High-school Degree",
                location: "Kumaripati, Lalitpur",
                website: "https://molihss.edu.np/",
                end: "2020",
                major: "Science",
                description:
                    "Completed high-school degree in Science stream focused on Physics, Chemistry and Mathematics.",
            },
            {
                name: "SEE",
                institution: "Nightingale International Secondary School",
                type: "Secondary Education",
                location: "Kupondole, Lalitpur",
                website: "https://nightingale.edu.np/",
                end: "2018",
                major: "Science",
                description:
                    "Completed secondary education with distinction in English, Mathematics and Science.",
            },
        ];
    }

    public async getWorkExperiences(): Promise<WorkExperience[]> {
        await this.preApiCall();
        return [
            {
                company: {
                    name: "Crocus Pearl Technologies",
                    location: "Khusibun, Kathmandu, Nepal",
                    website: "https://crocuspearl.com/",
                },
                position: "Back-end Developer",
                description:
                    "A company that specializes in development, design and marketing.",
                duration: {
                    start: "2023/05/02",
                },
                skills: [
                    "Django",
                    "Django Rest Framework",
                    "JavaScript",
                    "MySQL",
                ],
            },
            {
                company: {
                    name: "Crocus Pearl Technologies",
                    location: "Khusibun, Kathmandu, Nepal",
                    website: "https://crocuspearl.com/",
                },
                position: "Back-end Intern",
                description:
                    "A company that specializes in development, design and marketing.",
                duration: {
                    start: "2023/01/01",
                    end: "2023-05-01",
                },
                skills: [
                    "Django",
                    "Django Rest Framework",
                    "JavaScript",
                    "PHP",
                    "Laravel",
                    "MySQL",
                ],
            },
            {
                company: {
                    name: "Islington College",
                    location: "Kamalpokhari, Kathmandu, Nepal",
                    website: "https://islington.edu.np/",
                },
                position: "Teaching Assistant",
                duration: {
                    start: "2022/11/01",
                    end: "2023/02/01",
                },
                description:
                    "An institution that specializes in IT and Business degrees, ranking among the top colleges in Nepal.",
                tasks: [
                    "Assisted in Programming (Java) Module for the Academics Department of the college by answering student queries and helping them with their assignments.",
                    "Led a team of developers and designers to complete an internal system for the college.",
                    "Decluttered and improved the system database by migrating to MySQL and designing new database schema.",
                ],
                skills: [
                    "Python",
                    "Django",
                    "JavaScript",
                    "TailwindCSS",
                    "MySQL",
                ],
            },
        ];
    }
}

"use client";

import { AcademicDegrees } from "@/components/AcademicDegree";
import { CvSeparator } from "@/components/CvSeparator";
import { Projects } from "@/components/Project";
import { SocialLinks } from "@/components/SocialLinks";
import { WorkExperiences } from "@/components/WorkExperience";
import { GithubService } from "@/services/GithubService";
import { formatDistance } from "date-fns";
import { PinAlt } from "iconoir-react";
import { DM_Sans } from "next/font/google";
import { useEffect, useState } from "react";
import { AcademicDegree } from "../../@types/AcademicDegree";
import { UserRepo } from "../../@types/GithubRepository";
import { WorkExperience } from "../../@types/WorkExperience";

const dmSans = DM_Sans({
    subsets: ["latin"],
    weight: ["400", "500", "700"],
});

export default function Home() {
    const [workExperience, setWorkExperience] = useState<WorkExperience[]>([
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
                "Python",
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
                name: "Crocus Pearl Technologies",
                location: "Khusibun, Kathmandu, Nepal",
                website: "https://crocuspearl.com/",
            },
            position: "Back-end Intern",
            description:
                "A company that specializes in development, design and marketing.",
            duration: {
                start: "2023/02/01",
                end: "2023-05-01",
            },
            skills: [
                "Python",
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
            skills: ["Python", "Django", "JavaScript", "TailwindCSS", "MySQL"],
        },
    ]);

    const [academicDegree, setAcademicDegree] = useState<AcademicDegree[]>([
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
    ]);

    const [projects, setProjects] = useState<UserRepo[]>([]);

    useEffect(() => {
        const githubService = new GithubService();
        githubService.getPinnedReposWithLanguagesAndCommit().then((repos) => {
            setProjects(repos);
        });
    }, []);

    return (
        <main
            className={`flex min-h-screen w-full flex-col items-center sm:flex-row sm:items-stretch ${dmSans.className}`}
        >
            <div className="w-full flex-grow overflow-auto bg-white px-5 py-3 text-primary sm:min-h-screen sm:w-3/4 sm:py-10 md:w-3/5 xl:max-h-screen">
                <div className="title-bar flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-0">
                    <div className="header-text flex flex-row items-center gap-2 sm:flex-col sm:items-start sm:gap-1">
                        <div className="name text-sm font-bold xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">
                            Utsav Gurmachhan Magar
                        </div>
                        <div className="separator block sm:hidden">|</div>
                        <div className="position text-sm font-medium text-secondary xs:text-lg">
                            Back-end Developer
                        </div>
                    </div>
                    <SocialLinks />
                </div>
                <WorkExperiences workExperiences={workExperience} />
                <CvSeparator />
                <Projects projects={projects} />
                <CvSeparator />
                <AcademicDegrees academicDegrees={academicDegree} />
            </div>
            <div className="w-full bg-primary px-5 py-8 text-white sm:min-h-screen sm:w-1/4 sm:py-10 md:w-2/5 xl:max-h-screen">
                <div>
                    Hi, I&apos;m{" "}
                    <span className="text-tertiary">Utsav Gurmachhan</span>,
                    also known as{" "}
                    <span className="text-tertiary">&quot;ryuuzu&quot;</span> in
                    the universe of online games and platforms. Personally, I
                    like to think of myself as the know and try it all jack of
                    all trades. I, sometimes, am a gamer, a cook, clean freak,
                    an organizer but most of all a developer, a full-stack one
                    at hand.
                    <br /> <br />I have got my hands on different programming
                    languages and out of all of them,{" "}
                    <strong className="underline decoration-dotted underline-offset-4">
                        Python
                    </strong>{" "}
                    remains my all-time favorite and unbeaten. Although I have
                    undying love for{" "}
                    <strong className="underline decoration-dotted underline-offset-4">
                        Python
                    </strong>
                    , I am also well-versed in JavaScript, TypeScript, and
                    front-end frameworks like React, and Next. I haven&apos;t
                    attempted any backend development in JavaScript due to my
                    loyalty to{" "}
                    <strong className="underline decoration-dotted underline-offset-4">
                        Python
                    </strong>{" "}
                    and its popular web framework Django. I can use Django to
                    create a full-fledged web application with the help of
                    HTML/CSS and some JavaScript. I have also experienced the
                    hardships of deploying such applications so that my lovely
                    Python web applications can easily rest in the clouds and
                    serve the requests from users happily. I quote{" "}
                    <em>
                        <strong>Cory &quot;cr0bot&quot; Hughart</strong>
                    </em>{" "}
                    who inspired me to write my introductions,{" "}
                    <em>
                        &quot;A full-stack developer knows no bounds. And when
                        they find one they cross it without hesitation, boldly
                        going into the unknown to return richer for it.&quot;
                    </em>
                    <br /> <br />
                    {academicDegree.length > 0 && (
                        <>
                            {academicDegree[0].end ? (
                                <>
                                    I have completed my {academicDegree[0].type}{" "}
                                    in {academicDegree[0].major} from{" "}
                                    <a
                                        href={academicDegree[0].website}
                                        className="text-white underline decoration-dotted underline-offset-4"
                                        target="_blank"
                                    >
                                        {academicDegree[0].institution}
                                    </a>
                                    .
                                </>
                            ) : (
                                <>
                                    I am currently pursuing my{" "}
                                    {academicDegree[0].type} in{" "}
                                    {academicDegree[0].major} from{" "}
                                    <a
                                        href={academicDegree[0].website}
                                        className="text-white underline decoration-dotted underline-offset-4"
                                        target="_blank"
                                    >
                                        {academicDegree[0].institution}
                                    </a>
                                    .
                                </>
                            )}
                        </>
                    )}{" "}
                    {workExperience.length > 0 && (
                        <>
                            {workExperience[0].duration.end ? (
                                <>
                                    I have worked as a{" "}
                                    {workExperience[0].position} at{" "}
                                    <a
                                        href={workExperience[0].company.website}
                                        className="text-white underline decoration-dotted underline-offset-4"
                                        target="_blank"
                                    >
                                        {workExperience[0].company.name}
                                    </a>{" "}
                                    for{" "}
                                    {formatDistance(
                                        new Date(
                                            workExperience[0].duration.start
                                        ),
                                        new Date(workExperience[0].duration.end)
                                    )}
                                    .
                                </>
                            ) : (
                                <>
                                    I am working as a{" "}
                                    {workExperience[0].position} at{" "}
                                    <a
                                        href={workExperience[0].company.website}
                                        className="text-white underline decoration-dotted underline-offset-4"
                                        target="_blank"
                                    >
                                        {workExperience[0].company.name}
                                    </a>{" "}
                                    for past{" "}
                                    {formatDistance(
                                        new Date(
                                            workExperience[0].duration.start
                                        ),
                                        new Date()
                                    )}
                                    .
                                </>
                            )}
                        </>
                    )}
                </div>
                <a
                    href="https://goo.gl/maps/JdGHKxArPFvGGv6w7"
                    className="my-5 flex flex-row items-center gap-2 text-tertiary transition-colors duration-300 hover:text-slate-300"
                    target="_blank"
                >
                    <PinAlt /> <div>Chandragiri, Kathmandu, Nepal</div>
                </a>
                <a
                    href="https://leonard.sh/"
                    target="_blank"
                    className="text-xs decoration-dotted underline-offset-2 hover:underline"
                >
                    Inspired by Leonard
                </a>
            </div>
        </main>
    );
}

"use client";

import { AcademicDegrees } from "@/components/AcademicDegrees";
import { CvSeparator } from "@/components/CvSeparator";
import { Header } from "@/components/Header";
import { Projects } from "@/components/Project";
import { Sidebar } from "@/components/Sidebar";
import { WorkExperiences } from "@/components/WorkExperience";
import { GithubService } from "@/services/GithubService";
import { RyuuApiService } from "@/services/RyuuApiService";
import { formatDistance } from "date-fns";
import { useEffect, useState } from "react";

import { AcademicDegree } from "../../@types/AcademicDegree";
import { UserRepo } from "../../@types/GithubRepository";
import { WorkExperience } from "../../@types/WorkExperience";

export default function Home() {
    const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>(
        []
    );
    const [isWorkExperiencesLoading, setIsWorkExperiencesLoading] =
        useState<boolean>(true);

    const [academicDegrees, setAcademicDegrees] = useState<AcademicDegree[]>(
        []
    );
    const [isAcademicDegreesLoading, setIsAcademicDegreesLoading] =
        useState<boolean>(true);

    const [projects, setProjects] = useState<UserRepo[]>([]);
    const [isProjectsLoading, setIsProjectLoading] = useState<boolean>(true);

    useEffect(() => {
        const githubService = new GithubService();
        const ryuuApiService = new RyuuApiService();
        githubService
            .getPinnedReposWithLanguagesAndCommit()
            .then((repos) => {
                setProjects(repos);
                setIsProjectLoading(false);
            })
            .catch((error) => {
                setIsProjectLoading(false);
            });
        ryuuApiService
            .getAcademicDegrees()
            .then((academicDegrees) => {
                setAcademicDegrees(academicDegrees);
                setIsAcademicDegreesLoading(false);
            })
            .catch((error) => {
                setIsAcademicDegreesLoading(false);
            });
        ryuuApiService
            .getWorkExperiences()
            .then((workExperiences) => {
                setWorkExperiences(workExperiences);
                setIsWorkExperiencesLoading(false);
            })
            .catch((error) => {
                setIsWorkExperiencesLoading(false);
            });
    }, []);

    return (
        <main
            className={`flex min-h-screen w-full flex-col items-center sm:items-stretch md:flex-row`}
        >
            <div className="w-full flex-grow overflow-auto bg-white px-5 py-3 text-primary sm:min-h-screen sm:py-10 md:max-h-screen md:w-3/5">
                <Header
                    title="Utsav Gurmachhan Magar"
                    subTitle="Back-end Developer"
                />
                <WorkExperiences workExperiences={workExperiences} isLoading={isWorkExperiencesLoading} />
                <CvSeparator />
                <Projects projects={projects} isLoading={isProjectsLoading} />
                <CvSeparator />
                <AcademicDegrees
                    academicDegrees={academicDegrees}
                    isLoading={isAcademicDegreesLoading}
                />
            </div>
            <Sidebar>
                Hi, I&apos;m{" "}
                <span className="text-tertiary">Utsav Gurmachhan</span>, also
                known as{" "}
                <span className="text-tertiary">&quot;ryuuzu&quot;</span> in the
                universe of online games and platforms. Personally, I like to
                think of myself as the know and try it all jack of all trades.
                I, sometimes, am a gamer, a cook, clean freak, an organizer but
                most of all a developer, a full-stack one at hand.
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
                , I am also well-versed in JavaScript, TypeScript, and front-end
                frameworks like React, and Next. I haven&apos;t attempted any
                backend development in JavaScript due to my loyalty to{" "}
                <strong className="underline decoration-dotted underline-offset-4">
                    Python
                </strong>{" "}
                and its popular web framework Django. I can use Django to create
                a full-fledged web application with the help of HTML/CSS and
                some JavaScript. I have also experienced the hardships of
                deploying such applications so that my lovely Python web
                applications can easily rest in the clouds and serve the
                requests from users happily. I quote{" "}
                <em>
                    <strong>Cory &quot;cr0ybot&quot; Hughart</strong>
                </em>{" "}
                who inspired me to write my introductions,{" "}
                <em>
                    &quot;A full-stack developer knows no bounds. And when they
                    find one they cross it without hesitation, boldly going into
                    the unknown to return richer for it.&quot;
                </em>
                <br /> <br />
                {academicDegrees.length > 0 && (
                    <>
                        {academicDegrees[0].end ? (
                            <>
                                I have completed my {academicDegrees[0].type} in{" "}
                                {academicDegrees[0].major} from{" "}
                                <a
                                    href={academicDegrees[0].website}
                                    className="text-white underline decoration-dotted underline-offset-4"
                                    target="_blank"
                                >
                                    {academicDegrees[0].institution}
                                </a>
                                .
                            </>
                        ) : (
                            <>
                                I am currently pursuing my{" "}
                                {academicDegrees[0].type} in{" "}
                                {academicDegrees[0].major} from{" "}
                                <a
                                    href={academicDegrees[0].website}
                                    className="text-white underline decoration-dotted underline-offset-4"
                                    target="_blank"
                                >
                                    {academicDegrees[0].institution}
                                </a>
                                .
                            </>
                        )}
                    </>
                )}{" "}
                {workExperiences.length > 0 && (
                    <>
                        {workExperiences[0].duration.end ? (
                            <>
                                I have worked as a {workExperiences[0].position}{" "}
                                at{" "}
                                <a
                                    href={workExperiences[0].company.website}
                                    className="text-white underline decoration-dotted underline-offset-4"
                                    target="_blank"
                                >
                                    {workExperiences[0].company.name}
                                </a>{" "}
                                for{" "}
                                {formatDistance(
                                    new Date(workExperiences[0].duration.start),
                                    new Date(workExperiences[0].duration.end)
                                )}
                                .
                            </>
                        ) : (
                            <>
                                I am working as a {workExperiences[0].position}{" "}
                                at{" "}
                                <a
                                    href={workExperiences[0].company.website}
                                    className="text-white underline decoration-dotted underline-offset-4"
                                    target="_blank"
                                >
                                    {workExperiences[0].company.name}
                                </a>{" "}
                                for past{" "}
                                {formatDistance(
                                    new Date(workExperiences[0].duration.start),
                                    new Date()
                                )}
                                .
                            </>
                        )}
                    </>
                )}
            </Sidebar>
        </main>
    );
}

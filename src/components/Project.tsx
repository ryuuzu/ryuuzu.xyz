import { ArrowBlCircle, GitFork, Star } from "iconoir-react";

import { UserRepo } from "../types/GithubRepository";
import { SecondaryCvSeparator } from "./CvSeparator";
import Loading from "./Loading";

const Project = ({ project }: { project: UserRepo }) => {
    return (
        <>
            <div className="project flex flex-col justify-between md:flex-row">
                <div className="project-repo-details w-full md:w-2/3">
                    <div className="project-title flex items-center gap-2 text-primary">
                        <a
                            href={
                                project.repoData.homepage
                                    ? project.repoData.homepage
                                    : project.repoData.html_url
                            }
                            target="_blank"
                            className="underline decoration-dotted underline-offset-4"
                        >
                            {project.repoData.full_name.split("/")[1]}
                        </a>
                        <div className="flex items-center gap-1 no-underline">
                            <span className="font-bold">
                                {project.repoData.forks}
                            </span>
                            <GitFork />
                        </div>
                        <div className="flex items-center gap-1 no-underline">
                            <span className="font-bold">
                                {project.repoData.subscribers_count}
                            </span>
                            <Star />
                        </div>
                    </div>
                    <div className="project-description mt-1 text-sm font-medium ">
                        {project.repoData.description}
                    </div>
                    {project.languages && (
                        <div className="project-languages mt-2 text-sm font-medium ">
                            <span className="font-bold">Languages: </span>
                            {project.languages.join(" ⚫ ")}
                        </div>
                    )}
                </div>
                <div className="project-commit-details mt-3 text-left text-sm md:mt-0 md:text-right">
                    <div className="last-commit mt-1 flex gap-1 md:justify-end">
                        <span className="font-semibold">Last Commit SHA:</span>{" "}
                        <a
                            href={project.lastCommitUrl}
                            className="group flex items-center gap-1 hover:underline"
                            target="_blank"
                        >
                            {project.lastCommitData.tree.sha.slice(0, 7)}{" "}
                            <ArrowBlCircle className="transition-transform duration-300 group-hover:rotate-180" />
                        </a>
                    </div>
                    <div className="last-committer mt-1">
                        <span className="font-semibold">Last Commit by:</span>{" "}
                        <a
                            href={`mailto:${project.lastCommitData.author.email}`}
                            className="text-primary underline decoration-dotted underline-offset-4"
                        >
                            {project.lastCommitData.author.name}
                        </a>
                    </div>
                    <div className="repo-link mt-1">
                        <a
                            href={project.repoData.html_url}
                            target="_blank"
                            className="font-semibold decoration-1 hover:underline"
                        >
                            Checkout project on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export const Projects = ({
    projects,
    isLoading,
}: {
    projects: UserRepo[];
    isLoading: boolean;
}) => (
    <div className="projects">
        <h4 className="pb-1 text-xl font-bold text-tertiary sm:pb-2 sm:text-2xl">
            Projects
        </h4>
        {!isLoading ? (
            <>
                {projects.length >= 1 ? (
                    <>
                        {projects?.map((repo, index) => {
                            if (!repo) return null;
                            return (
                                <div key={`${repo.repoData.full_name}`}>
                                    <Project project={repo} />
                                    {index < projects.length - 1 && (
                                        <SecondaryCvSeparator />
                                    )}
                                </div>
                            );
                        })}
                    </>
                ) : (
                    <div>Looks like there are no projects.</div>
                )}
            </>
        ) : (
            <Loading />
        )}
    </div>
);

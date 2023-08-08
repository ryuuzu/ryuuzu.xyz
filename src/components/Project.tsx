import { UserRepo } from "../../@types/GithubRepository";
import Loading from "./Loading";
import { GitFork, Star, ArrowBlCircle } from "iconoir-react";

const Project = ({ project }: { project: UserRepo }) => {
	return (
		<>
			<div className="project flex flex-col md:flex-row justify-between">
				<div className="project-repo-details w-full md:w-2/3">
					<div className="project-title">
						<a
							href={
								project.repoData.website
									? project.repoData.website
									: project.repoData.link
							}
							target="_blank"
							className="text-primary flex gap-2 items-center"
						>
							<div className="underline decoration-dotted underline-offset-4">
								{project.repoData.repo}
							</div>
							<div className="flex no-underline gap-1 items-center">
								<span className="font-bold">
									{project.repoData.forks}
								</span>
								<GitFork />
							</div>
							<div className="flex no-underline gap-1 items-center">
								<span className="font-bold">
									{project.repoData.stars}
								</span>
								<Star />
							</div>
						</a>
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
				<div className="project-commit-details mt-3 md:mt-0 text-sm text-left md:text-right">
					<div className="last-commit mt-1 flex gap-1 md:justify-end">
						<span className="font-semibold">Last Commit SHA:</span>{" "}
						<a
							href={project.lastCommitUrl}
							className="flex gap-1 items-center group hover:underline"
							target="_blank"
						>
							{project.lastCommitData.tree.sha.slice(0, 7)}{" "}
							<ArrowBlCircle className="group-hover:rotate-180 transition-transform duration-300" />
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
							href={project.repoData.link}
							target="_blank"
							className="font-semibold hover:underline decoration-1"
						>
							Checkout project on GitHub
						</a>
					</div>
				</div>
			</div>
		</>
	);
};

export const Projects = ({ projects }: { projects: UserRepo[] }) => (
	<div className="projects">
		<h4 className="pb-1 text-xl font-bold text-tertiary sm:pb-2 sm:text-2xl">
			Projects
		</h4>
		{projects && projects?.length >= 1 ? (
			<>
				{projects?.map((repo, index) => {
					if (!repo) return null;
					return (
						<>
							<Project
								project={repo}
								key={`${repo.repoData.owner}/${repo.repoData.repo}`}
							/>
							{index < projects.length - 1 && (
								<div className="projects-separator my-5 border-b border-tertiary border-dotted"></div>
							)}
						</>
					);
				})}
			</>
		) : (
			<Loading />
		)}
	</div>
);

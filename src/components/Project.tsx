import { UserRepo } from "../../@types/GithubRepository";
import Loading from "./Loading";

const Project = ({ project }: { project: UserRepo }) => {
	return (
		<>
			<div className="project">
				<div className="project-header">
					<a
						href={
							project.repoData.website
								? project.repoData.website
								: project.repoData.link
						}
						target="_blank"
						className="text-primary underline decoration-dotted underline-offset-4 "
					>
						{project.repoData.repo}
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
								<div className="projects-separator my-5"></div>
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

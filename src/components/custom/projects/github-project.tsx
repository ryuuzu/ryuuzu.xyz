import { GitFork, MoveDownRight, Star } from 'lucide-react';

import type { TUserRepo } from '@/types/project';

export const GithubProject = ({ project }: { project: TUserRepo }) => (
  <div className="cv__user_project flex flex-col justify-between md:flex-row">
    <div className="cv__user_project__repo_details w-full md:w-2/3">
      <div className="cv__user_project__title text-primary flex items-center gap-2">
        <a
          href={
            project.repoData.homepage
              ? project.repoData.homepage
              : project.repoData.html_url
          }
          target="_blank"
          rel="noopener noreferrer"
          className="underline decoration-dotted underline-offset-4"
        >
          {project.repoData.full_name.split('/')[1]}
        </a>
        <div className="cv__user_project__github_forks flex items-center gap-1 no-underline">
          <span className="font-bold">{project.repoData.forks}</span>
          <GitFork className={'size-5'} />
        </div>
        <div className="cv__user_project__github_stars flex items-center gap-1 no-underline">
          <span className="font-bold">
            {project.repoData.subscribers_count}
          </span>
          <Star className={'size-5'} />
        </div>
      </div>
      <div className="cv__user_project__description mt-1 text-sm font-medium">
        {project.repoData.description}
      </div>
      {project.languages && (
        <div className="cv__user_project__languages mt-2 text-sm font-medium">
          <span className="font-bold">Languages: </span>
          {project.languages.join(' ⚫ ')}
        </div>
      )}
    </div>
    <div className="cv__user_project__commit_details mt-3 text-left text-sm md:mt-0 md:text-right">
      <div className="cv__user_project__commit_details__last_commit mt-1 flex gap-1 md:justify-end">
        <span className="font-semibold">Last Commit SHA:</span>{' '}
        {project.lastCommitData.tree.sha.slice(0, 7)}{' '}
      </div>
      <div className="cv__user_project__commit_details__last_committer mt-1">
        <span className="font-semibold">Last Commit by:</span>{' '}
        <a
          href={`mailto:${project.lastCommitData.author.email}`}
          className="text-primary underline decoration-dotted underline-offset-4"
        >
          {project.lastCommitData.author.name}
        </a>
      </div>
      <div className="cv__user_project__repo_link group mt-1 flex items-center justify-end gap-1">
        <a
          href={project.repoData.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="peer font-semibold decoration-1 hover:underline"
        >
          Checkout project on GitHub
        </a>
        <MoveDownRight className="border-primary size-3 rounded-full border p-0.5 transition-transform duration-300 peer-hover:rotate-270" />
      </div>
    </div>
  </div>
);

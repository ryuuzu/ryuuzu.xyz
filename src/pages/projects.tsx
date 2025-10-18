import { useQueries } from '@tanstack/react-query';
import { useMemo, useState } from 'react';

import { SecondaryCvSeparator } from '@/components/cv-separator';
import Loading from '@/components/loading';
import { Project as GithubProject } from '@/components/project';
import { useGlobalStore } from '@/store/global';
import type { TProject } from '@/types/project';

const Project = ({ project }: { project: TProject }) => (
  <div className="project flex flex-col justify-between gap-2">
    <div>
      <div className="project-title text-primary flex items-center gap-2">
        <div className="underline decoration-dotted underline-offset-4">
          {project.title}
        </div>
      </div>
      <div className="project-description mt-1 text-sm font-medium">
        {project.description}
      </div>
    </div>
    {project.features.length > 0 && (
      <div>
        <div className="underline decoration-dotted underline-offset-4">
          Features
        </div>
        <div className="project-features mt-2 text-sm font-medium">
          <ul className={'list-inside list-disc'}>
            {project.features.map((feature, index) => (
              <li key={`${project.title}-feature-${index}`}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    )}
    {project.images.length > 0 && (
      <div>
        <div className="underline decoration-dotted underline-offset-4">
          Screenshots
        </div>
        <div
          className={
            'scrollbar-thumb-primary scrollbar-thin scrollbar-thumb-rounded-full mt-1 flex snap-x flex-row gap-2 overflow-x-auto'
          }
        >
          {project.images.map((image, index) => (
            <img
              src={image.image.image}
              className={
                'max-w-full snap-start rounded-md shadow-md md:max-w-1/3'
              }
              key={`${project.title} Screenshot ${index}`}
            />
          ))}
        </div>
      </div>
    )}
    {project.languages_used && (
      <div className="project-languages mt-2 text-sm font-medium">
        <span className="font-bold">Languages: </span>
        {project.languages_used.join(' ⚫ ')}
      </div>
    )}
  </div>
);

export const Projects = () => {
  const { allProjects, getAllProjects, userProjects, getUserProjects } =
    useGlobalStore();

  const [activeTab, setActiveTab] = useState<'personal' | 'open-source'>(
    'personal'
  );

  const [
    { isLoading: isAllProjectsLoading },
    { isLoading: isUserProjectsLoading },
  ] = useQueries({
    queries: [
      {
        queryKey: ['get', 'all-projects'],
        queryFn: getAllProjects,
        enabled: !allProjects.length,
      },
      {
        queryKey: ['get', 'user-projects'],
        queryFn: getUserProjects,
        enabled: !userProjects.length,
      },
    ],
  });

  const projectsToDisplay = useMemo(
    () =>
      allProjects.filter((project) =>
        activeTab === 'open-source'
          ? project.is_github_repo
          : !project.is_github_repo
      ),
    [allProjects, activeTab]
  );

  return (
    <>
      <div className="projects mt-4 sm:mt-10">
        <div className={'flex items-center justify-between'}>
          <h4 className="text-tertiary pb-1 text-xl font-bold sm:pb-2 sm:text-2xl">
            Projects
          </h4>
          <div>
            <button
              className={`mr-2 rounded-full px-4 py-1 text-sm font-medium transition-colors duration-300 ${
                activeTab === 'open-source'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab('open-source')}
            >
              Open Source
            </button>
            <button
              className={`rounded-full px-4 py-1 text-sm font-medium transition-colors duration-300 ${
                activeTab === 'personal'
                  ? 'bg-primary text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
              onClick={() => setActiveTab('personal')}
            >
              Others
            </button>
          </div>
        </div>
        <div>
          {isAllProjectsLoading || isUserProjectsLoading ? (
            <Loading />
          ) : (
            <>
              {projectsToDisplay.map((project, index) => {
                const userProject = userProjects.find(
                  (p) => p.id === project.id
                );

                if (project.is_github_repo && !userProject) {
                  return;
                }

                return (
                  <div key={project.title}>
                    {project.is_github_repo ? (
                      <GithubProject project={userProject!} />
                    ) : (
                      <Project project={project} />
                    )}
                    {index < projectsToDisplay.length - 1 && (
                      <SecondaryCvSeparator />
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </>
  );
};

import { useIsFetching } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useMemo, useState } from 'react';

import { CvHeader } from '@/components/custom/cv-header';
import Loader from '@/components/custom/loader/default';
import { GithubProject } from '@/components/custom/projects/github-project';
import { Project } from '@/components/custom/projects/project';
import { SecondaryCvSeparator } from '@/components/custom/separator';
import {
  allProjectsQueryOptions,
  userProjectsQueryOptions,
} from '@/contracts/queries/core';
import { QUERY_KEYS, useGlobalStore } from '@/stores/global';

export const Route = createFileRoute('/_default/projects')({
  component: RouteComponent,
  loader: async ({ context: { queryClient } }) => {
    const allProjectsData = await queryClient.ensureQueryData(
      allProjectsQueryOptions()
    );
    const userProjectsData = await queryClient.ensureQueryData(
      userProjectsQueryOptions()
    );

    return { allProjectsData, userProjectsData };
  },
});

function RouteComponent() {
  const { allProjectsData, userProjectsData } = Route.useLoaderData();
  const [activeTab, setActiveTab] = useState<'personal' | 'open-source'>(
    'personal'
  );

  const { allProjects, setAllProjects, userProjects, setUserProjects } =
    useGlobalStore();

  const isAllProjectsFetching =
    useIsFetching({
      queryKey: QUERY_KEYS.ALL_PROJECTS,
    }) > 0;

  const isUserProjectsFetching =
    useIsFetching({
      queryKey: QUERY_KEYS.USER_PROJECTS,
    }) > 0;

  useEffect(() => {
    setAllProjects(allProjectsData);
  }, [allProjectsData, setAllProjects]);

  useEffect(() => {
    setUserProjects(userProjectsData);
  }, [userProjectsData, setUserProjects]);

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
    <div className={'projects space-y-1 sm:space-y-2'}>
      <div className={'flex items-center justify-between'}>
        <CvHeader>Projects</CvHeader>
        <div>
          <button
            className={`mr-2 cursor-pointer rounded-full px-4 py-1 text-sm font-medium transition-colors duration-300 ${
              activeTab === 'open-source'
                ? 'bg-primary text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setActiveTab('open-source')}
          >
            Open Source
          </button>
          <button
            className={`cursor-pointer rounded-full px-4 py-1 text-sm font-medium transition-colors duration-300 ${
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
        {isAllProjectsFetching || isUserProjectsFetching ? (
          <Loader />
        ) : (
          <>
            {projectsToDisplay.map((project, index) => {
              const userProject = userProjects.find((p) => p.id === project.id);

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
                    <SecondaryCvSeparator className={'my-5'} />
                  )}
                </div>
              );
            })}
          </>
        )}
      </div>
    </div>
  );
}

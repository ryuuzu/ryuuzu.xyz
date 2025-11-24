import { useIsFetching } from '@tanstack/react-query';
import { Link, createFileRoute } from '@tanstack/react-router';
import { format } from 'date-fns';
import { useEffect } from 'react';

import { CvHeader } from '@/components/custom/cv-header';
import Loader from '@/components/custom/loader/default';
import { GithubProject } from '@/components/custom/projects/github-project';
import {
  PrimaryCvSeparator,
  SecondaryCvSeparator,
} from '@/components/custom/separator';
import { userProjectsQueryOptions } from '@/contracts/queries/core';
import { QUERY_KEYS, useGlobalStore } from '@/stores/global';

export const Route = createFileRoute('/_default/')({
  component: RouteComponent,
  loader: ({ context: { queryClient } }) => {
    return queryClient.ensureQueryData(userProjectsQueryOptions());
  },
});

function RouteComponent() {
  const userProjectsData = Route.useLoaderData();

  const { academicDegrees, setUserProjects, workExperiences, userProjects } =
    useGlobalStore();

  useEffect(() => {
    setUserProjects(userProjectsData);
  }, [userProjectsData, setUserProjects]);

  const isWorkExperiencesLoading =
    useIsFetching({
      queryKey: QUERY_KEYS.WORK_EXPERIENCES,
    }) > 0;
  const isAcademicDegreesLoading =
    useIsFetching({
      queryKey: QUERY_KEYS.ACADEMIC_DEGREES,
    }) > 0;
  const isUserProjectsLoading =
    useIsFetching({
      queryKey: QUERY_KEYS.USER_PROJECTS,
    }) > 0;

  return (
    <div className={'space-y-4'}>
      <section className={'cv__work_experiences space-y-1 sm:space-y-2'}>
        <CvHeader>Work</CvHeader>
        {isWorkExperiencesLoading ? (
          <Loader />
        ) : (
          <>
            {workExperiences.length >= 1 ? (
              <>
                {workExperiences.map((workExperience, workExperienceIndex) => {
                  return (
                    <div
                      key={`${workExperience.company.name.toLowerCase()}-work-experience-${workExperienceIndex}`}
                    >
                      <div>
                        <div className="cv__work_experience__company_info text-secondary flex flex-col text-sm font-bold sm:flex-row sm:justify-between">
                          <div className={'sm:space-y-1'}>
                            <div>
                              <a
                                href={workExperience.company.website}
                                className="text-primary underline decoration-dotted underline-offset-4"
                              >
                                {workExperience.company.name}
                              </a>
                              {', '}
                              {workExperience.position}
                            </div>
                            <div>{workExperience.company.location}</div>
                          </div>
                          <div>
                            {format(
                              new Date(workExperience.duration.start),
                              'LLL yyyy'
                            )}{' '}
                            -{' '}
                            {workExperience.duration.end
                              ? format(
                                  new Date(workExperience.duration.end),
                                  'LLL yyyy'
                                )
                              : 'Present'}
                          </div>
                        </div>
                        <div className="cv__work_experience__description mt-1 text-sm font-medium">
                          {workExperience.description}
                        </div>
                        {workExperience.tasks && (
                          <div className="cv__work_experience__tasks mt-2 text-sm font-medium">
                            <ul className="list-inside list-disc">
                              {workExperience.tasks.map((task, taskIndex) => {
                                return (
                                  <li
                                    key={`${workExperience.company.name.toLowerCase()}-task-${taskIndex}`}
                                  >
                                    {task}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        )}
                        <div className="cv__work_experience__skills mt-2 text-sm font-medium">
                          <span className="font-bold">Skills: </span>
                          {workExperience.skills.join(' ⚫ ')}
                        </div>
                      </div>
                      {workExperienceIndex < workExperiences.length - 1 && (
                        <SecondaryCvSeparator className={'my-5'} />
                      )}
                    </div>
                  );
                })}
              </>
            ) : (
              <div>Looks like there are no work experiences.</div>
            )}
          </>
        )}
      </section>
      <PrimaryCvSeparator />
      <section className={'cv__user_projects space-y-1'}>
        <div className={'flex justify-between'}>
          <CvHeader>Projects</CvHeader>
          <Link
            to="/projects"
            className={
              'text-primary underline decoration-dotted underline-offset-4'
            }
          >
            View All Projects
          </Link>
        </div>
        {!isUserProjectsLoading ? (
          <>
            {userProjects.length >= 1 ? (
              <>
                {userProjects.map((project, index) => {
                  return (
                    <div key={`${project.repoData.full_name}`}>
                      <GithubProject project={project} />
                      {index < userProjects.length - 1 && (
                        <SecondaryCvSeparator className={'my-5'} />
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
          <Loader />
        )}
      </section>
      <PrimaryCvSeparator />
      <section className={'cv__academic_degrees space-y-1'}>
        <CvHeader>Education</CvHeader>
        {!isAcademicDegreesLoading ? (
          <>
            {academicDegrees.length >= 1 ? (
              <>
                {academicDegrees.map((academicDegree, index) => {
                  return (
                    <div
                      key={`${academicDegree.name}-${academicDegree.institution}`}
                    >
                      <div>
                        <div className="cv__academic_degrees__institution_info text-secondary flex flex-col text-sm font-bold sm:flex-row sm:justify-between">
                          <div className="sm:pb-1">
                            <a
                              href={academicDegree.website}
                              className="text-primary underline decoration-dotted underline-offset-4"
                            >
                              {academicDegree.institution}
                            </a>
                            {', '}
                            {academicDegree.name}
                          </div>
                          <div>
                            {academicDegree.end
                              ? format(new Date(academicDegree.end), 'yyyy')
                              : 'Current'}
                          </div>
                        </div>
                        <div className="cv__academic_degrees__description mt-1 text-sm font-medium">
                          {academicDegree.description}
                        </div>
                      </div>
                      {index < academicDegrees.length - 1 && (
                        <div className="cv__academic_degrees__separator my-5"></div>
                      )}
                    </div>
                  );
                })}
              </>
            ) : (
              <div>Looks like there are no degrees to show.</div>
            )}
          </>
        ) : (
          <Loader />
        )}
      </section>
    </div>
  );
}

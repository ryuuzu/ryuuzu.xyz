import { useQueries } from '@tanstack/react-query';

import { AcademicDegrees } from '@/components/academic-degrees';
import { PrimaryCvSeparator } from '@/components/cv-separator';
import { Projects } from '@/components/project';
import { WorkExperiences } from '@/components/work-experience';
import { useGlobalStore } from '@/store/global';

export const Home = () => {
  const {
    workExperiences,
    getWorkExperiences,
    userProjects,
    getUserProjects,
    academicDegrees,
    getAcademicDegrees,
  } = useGlobalStore();

  const [
    { isLoading: isWorkExperiencesLoading },
    { isLoading: isProjectsLoading },
    { isLoading: isAcademicDegreesLoading },
  ] = useQueries({
    queries: [
      {
        queryKey: ['workExperiences'],
        queryFn: getWorkExperiences,
        enabled: !workExperiences.length,
      },
      {
        queryKey: ['userProjects'],
        queryFn: getUserProjects,
        enabled: !userProjects.length,
      },
      {
        queryKey: ['academicDegrees'],
        queryFn: getAcademicDegrees,
        enabled: !academicDegrees.length,
      },
    ],
  });

  return (
    <>
      <WorkExperiences
        workExperiences={workExperiences}
        isLoading={isWorkExperiencesLoading}
      />
      <PrimaryCvSeparator />
      <Projects projects={userProjects} isLoading={isProjectsLoading} />
      <PrimaryCvSeparator />
      <AcademicDegrees
        academicDegrees={academicDegrees}
        isLoading={isAcademicDegreesLoading}
      />
    </>
  );
};

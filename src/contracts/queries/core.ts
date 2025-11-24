import { queryOptions } from '@tanstack/react-query';

import type { IBaseQueryOptions } from '@/types/contracts/queries/base';

import {
  QUERY_KEYS,
  getAcademicDegrees,
  getAllProjects,
  getCodeAwards,
  getCredits,
  getNotFoundCounter,
  getSocialLinks,
  getUserProjects,
  getWorkExperiences,
} from '@/stores/global';

export const academicDegreesQueryOptions = (
  options: IBaseQueryOptions = {}
) => {
  return queryOptions({
    queryKey: options.queryKey ?? QUERY_KEYS.ACADEMIC_DEGREES,
    queryFn: () => getAcademicDegrees(),
    enabled: options.enabled ?? true,
  });
};

export const codeAwardsQueryOptions = (options: IBaseQueryOptions = {}) => {
  return queryOptions({
    queryKey: options.queryKey ?? QUERY_KEYS.CODE_AWARDS,
    queryFn: () => getCodeAwards(),
    enabled: options.enabled ?? true,
  });
};

export const creditsQueryOptions = (options: IBaseQueryOptions = {}) => {
  return queryOptions({
    queryKey: options.queryKey ?? QUERY_KEYS.CREDITS,
    queryFn: () => getCredits(),
    enabled: options.enabled ?? true,
  });
};
export const notFoundCounterQueryOptions = (
  options: IBaseQueryOptions = {}
) => {
  return queryOptions({
    queryKey: options.queryKey ?? QUERY_KEYS.NOT_FOUND_COUNTER,
    queryFn: () => getNotFoundCounter(),
    enabled: options.enabled ?? true,
  });
};

export const socialLinksQueryOptions = (options: IBaseQueryOptions = {}) => {
  return queryOptions({
    queryKey: options.queryKey ?? QUERY_KEYS.SOCIAL_LINKS,
    queryFn: () => getSocialLinks(),
    enabled: options.enabled ?? true,
  });
};

export const userProjectsQueryOptions = (options: IBaseQueryOptions = {}) => {
  return queryOptions({
    queryKey: options.queryKey ?? QUERY_KEYS.USER_PROJECTS,
    queryFn: () => getUserProjects(),
    enabled: options.enabled ?? true,
  });
};

export const workExperiencesQueryOptions = (
  options: IBaseQueryOptions = {}
) => {
  return queryOptions({
    queryKey: options.queryKey ?? QUERY_KEYS.WORK_EXPERIENCES,
    queryFn: () => getWorkExperiences(),
    enabled: options.enabled ?? true,
  });
};

export const allProjectsQueryOptions = (options: IBaseQueryOptions = {}) => {
  return queryOptions({
    queryKey: options.queryKey ?? QUERY_KEYS.ALL_PROJECTS,
    queryFn: () => getAllProjects(),
    enabled: options.enabled ?? true,
  });
};

import { create } from 'zustand';

import type {
  TAcademicDegree,
  TCodeAward,
  TNotFoundCounter,
  TSocialLink,
  TWorkExperience,
} from '@/types/core';
import type { TProject, TUserRepo } from '@/types/project';
import type { TGlobalStore } from '@/types/stores/global';

import { API_ROUTES } from '@/config/routes';
import axios from '@/lib/axios';

export const QUERY_KEYS = {
  SOCIAL_LINKS: ['get', 'social-links'],
  CODE_AWARDS: ['get', 'code-awards'],
  ACADEMIC_DEGREES: ['get', 'academic-degrees'],
  WORK_EXPERIENCES: ['get', 'work-experiences'],
  CREDITS: ['get', 'credits'],
  NOT_FOUND_COUNTER: ['get', 'not-found-counter'],
  USER_PROJECTS: ['get', 'user-projects'],
  ALL_PROJECTS: ['get', 'all-projects'],
};

export const getSocialLinks = async () => {
  const response = await axios.get<Array<TSocialLink>>(API_ROUTES.SOCIAL_LINKS);

  return response.data;
};

export const getCodeAwards = async () => {
  const response = await axios.get<Array<TCodeAward>>(API_ROUTES.CODE_AWARDS);
  return response.data;
};

export const getAcademicDegrees = async () => {
  const response = await axios.get<Array<TAcademicDegree>>(
    API_ROUTES.ACADEMIC_DEGREES
  );
  return response.data;
};

export const getWorkExperiences = async () => {
  const response = await axios.get<Array<TWorkExperience>>(
    API_ROUTES.WORK_EXPERIENCES
  );
  return response.data;
};

export const getCredits = async () => {
  const response = await axios.get<Array<TCodeAward>>(API_ROUTES.CREDITS);
  return response.data;
};

export const getNotFoundCounter = async () => {
  const response = await axios.get<TNotFoundCounter>(
    API_ROUTES.NOT_FOUND_COUNTER
  );
  return response.data;
};

export const getUserProjects = async () => {
  const getRepoLanguages = (languagesData: object) => {
    const total = Object.values(languagesData).reduce((a, b) => a + b, 0);
    return Object.entries(languagesData).map(([key, value]) => {
      return `${key}: ${((value / total) * 100).toFixed(2)}%`;
    });
  };

  const { data } = await axios.get<Array<TProject>>(API_ROUTES.PROJECTS);
  const userRepoProjects = data.filter((project) => project.is_github_repo);

  const repos: Array<TUserRepo> = [];
  for (const userRepoProject of userRepoProjects) {
    const lastCommitData = userRepoProject.github_last_commit_data;
    const repoData = userRepoProject.github_repo_data;
    const languagesData = userRepoProject.github_languages_data;
    const languages = await getRepoLanguages(
      userRepoProject.github_languages_data
    );
    repos.push({
      id: userRepoProject.id,
      repoData,
      languages,
      languagesData,
      lastCommitData,
    });
  }

  return repos;
};

export const getAllProjects = async () => {
  const response = await axios.get<Array<TProject>>(API_ROUTES.PROJECTS);
  return response.data;
};

export const useGlobalStore = create<TGlobalStore>((set) => ({
  socialLinks: [],
  codeAwards: [],
  academicDegrees: [],
  workExperiences: [],
  userProjects: [],
  allProjects: [],
  credits: [],
  notFoundCounter: undefined,
  setSocialLinks: (links) => set({ socialLinks: links }),
  setCodeAwards: (awards) => set({ codeAwards: awards }),
  setAcademicDegrees: (degrees) => set({ academicDegrees: degrees }),
  setWorkExperiences: (experiences) => set({ workExperiences: experiences }),
  setCredits: (credits) => set({ credits }),
  setNotFoundCounter: (counter) => set({ notFoundCounter: counter }),
  setUserProjects: (projects) => set({ userProjects: projects }),
  setAllProjects: (projects) => set({ allProjects: projects }),
}));

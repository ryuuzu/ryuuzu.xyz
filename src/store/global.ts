import { create } from 'zustand';

import { API_ROUTES } from '@/config/routes';
import axios from '@/lib/axios';
import type { TUserRepo } from '@/types/github-repo';
import { type TProject } from '@/types/project';
import { type TSocialLink } from '@/types/social-link';

import { type TGlobalStore } from './type';

export const useGlobalStore = create<TGlobalStore>((set) => ({
  socialLinks: [],
  getSocialLinks: async () => {
    const response = await axios.get<TSocialLink[]>(API_ROUTES.SOCIAL_LINKS);

    set({ socialLinks: response.data });
    return response.data;
  },
  codeAwards: [],
  getCodeAwards: async () => {
    const response = await axios.get(API_ROUTES.CODE_AWARDS);
    set({ codeAwards: response.data });
    return response.data;
  },
  academicDegrees: [],
  getAcademicDegrees: async () => {
    const response = await axios.get(API_ROUTES.ACADEMIC_DEGREES);
    set({ academicDegrees: response.data });
    return response.data;
  },
  workExperiences: [],
  getWorkExperiences: async () => {
    const response = await axios.get(API_ROUTES.WORK_EXPERIENCES);
    set({ workExperiences: response.data });
    return response.data;
  },
  credits: [],
  getCredits: async () => {
    const response = await axios.get(API_ROUTES.CREDITS);
    set({ credits: response.data });
    return response.data;
  },
  getNotFoundCounter: async () => {
    const response = await axios.get(API_ROUTES.NOT_FOUND_COUNTER);
    set({ notFoundCounter: response.data });
    return response.data;
  },
  userProjects: [],
  getUserProjects: async () => {
    const getRepoLanguages = (languagesData: object) => {
      const total = Object.values(languagesData).reduce((a, b) => a + b, 0);
      return Object.entries(languagesData).map(([key, value]) => {
        return `${key}: ${((value / total) * 100).toFixed(2)}%`;
      });
    };

    const { data } = await axios.get<TProject[]>(API_ROUTES.PROJECTS);
    const userRepoProjects = data.filter((project) => project.is_github_repo);

    const repos: TUserRepo[] = [];
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

    set({ userProjects: repos });

    return repos;
  },
  allProjects: [],
  getAllProjects: async () => {
    const response = await axios.get<TProject[]>(API_ROUTES.PROJECTS);
    set({ allProjects: response.data });
    return response.data;
  },
}));

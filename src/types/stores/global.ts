import type {
  TAcademicDegree,
  TCodeAward,
  TCredit,
  TNotFoundCounter,
  TSocialLink,
  TWorkExperience,
} from '@/types/core';
import type { TProject, TUserRepo } from '@/types/project';

export type TGlobalStore = {
  socialLinks: Array<TSocialLink>;
  codeAwards: Array<TCodeAward>;
  academicDegrees: Array<TAcademicDegree>;
  workExperiences: Array<TWorkExperience>;
  credits: Array<TCredit>;
  notFoundCounter?: TNotFoundCounter;
  userProjects: Array<TUserRepo>;
  allProjects: Array<TProject>;
  setSocialLinks: (links: Array<TSocialLink>) => void;
  setCodeAwards: (awards: Array<TCodeAward>) => void;
  setAcademicDegrees: (degrees: Array<TAcademicDegree>) => void;
  setWorkExperiences: (experiences: Array<TWorkExperience>) => void;
  setCredits: (credits: Array<TCredit>) => void;
  setNotFoundCounter: (counter: TNotFoundCounter) => void;
  setUserProjects: (projects: Array<TUserRepo>) => void;
  setAllProjects: (projects: Array<TProject>) => void;
};

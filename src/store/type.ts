import type { TAcademicDegree } from '@/types/academic-degree';
import type { TCodeAward } from '@/types/code-award';
import type { TCredit } from '@/types/credit';
import type { TUserRepo } from '@/types/github-repo';
import type { TNotFoundCounter } from '@/types/not-found-counter';
import type { TSocialLink } from '@/types/social-link';
import type { TWorkExperience } from '@/types/work-experience';

export type TGlobalStore = {
  socialLinks: TSocialLink[];
  getSocialLinks: () => Promise<TSocialLink[]>;
  codeAwards: TCodeAward[];
  getCodeAwards: () => Promise<TCodeAward[]>;
  academicDegrees: TAcademicDegree[];
  getAcademicDegrees: () => Promise<TAcademicDegree[]>;
  workExperiences: TWorkExperience[];
  getWorkExperiences: () => Promise<TWorkExperience[]>;
  credits: TCredit[];
  getCredits: () => Promise<TCredit[]>;
  notFoundCounter?: TNotFoundCounter;
  getNotFoundCounter: () => Promise<TNotFoundCounter>;
  userProjects: TUserRepo[];
  getUserProjects(): Promise<TUserRepo[]>;
};

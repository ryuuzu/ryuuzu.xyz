import { type TLastCommitData, type TRepository } from './github-repo';

export type TProject = {
  id: number;
  is_github_repo: boolean;
  repo_name: string;
  title: string;
  description: string;
  github_repo_data: TRepository;
  github_languages_data: object;
  github_last_commit_data: TLastCommitData;
  languages?: string[];
  created_at: string;
  updated_at: string;
  images: {
    image: {
      image: string;
      alt_text: string;
      title: string;
    };
  }[];
  features: string[];
  languages_used: string[];
};

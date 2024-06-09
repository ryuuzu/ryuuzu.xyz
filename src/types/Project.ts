import { LastCommitData, Repository } from "./GithubRepository";

export interface Project {
    is_github_repo: boolean;
    repo_name: string;
    title: string;
    description: string;
    github_repo_data: Repository;
    github_languages_data: object;
    github_last_commit_data: LastCommitData;
    languages?: string[];
    created_at: string;
    updated_at: string;
}

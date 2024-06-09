import { UserRepo } from "@/types/GithubRepository";
import { NotFoundCounter } from "@/types/NotFoundCounter";
import { Project } from "@/types/Project";
import axios from "axios";

import { AcademicDegree } from "../types/AcademicDegree";
import { CodeAward } from "../types/CodeAward";
import { Credit } from "../types/Credit";
import { SocialLink } from "../types/SocialLink";
import { WorkExperience } from "../types/WorkExperience";

export class RyuuApiService {
    private readonly apiUrl = process.env.NEXT_PUBLIC_API_URL;

    public async getSocialLinks(): Promise<SocialLink[]> {
        const response = await axios.get(`${this.apiUrl}/social-links`);
        return response.data;
    }

    public async getCodeAwards(): Promise<CodeAward[]> {
        const response = await axios.get(`${this.apiUrl}/code-awards`);
        return response.data;
    }

    public async getAcademicDegrees(): Promise<AcademicDegree[]> {
        const response = await axios.get(`${this.apiUrl}/academic-degrees`);
        return response.data;
    }

    public async getWorkExperiences(): Promise<WorkExperience[]> {
        const response = await axios.get(`${this.apiUrl}/work-experiences`);
        return response.data;
    }

    public async getCredits(): Promise<Credit[]> {
        const response = await axios.get(`${this.apiUrl}/credits`);
        return response.data;
    }

    public async getNotFoundCounterData(): Promise<NotFoundCounter> {
        const response = await axios.get(`${this.apiUrl}/not-found-counter`);
        return response.data;
    }

    public async getProjects(): Promise<Project[]> {
        const response = await axios.get(`${this.apiUrl}/projects`);
        return response.data;
    }

    public async getRepoLanguages(languagesData: object): Promise<string[]> {
        const total = Object.values(languagesData).reduce((a, b) => a + b, 0);
        return Object.entries(languagesData).map(([key, value]) => {
            return `${key}: ${((value / total) * 100).toFixed(2)}%`;
        });
    }

    public async getUserProjects(): Promise<UserRepo[]> {
        const projects = await this.getProjects();
        const userRepoProjects = projects.filter(
            (project) => project.is_github_repo
        );

        const repos: UserRepo[] = [];
        for (const userRepoProject of userRepoProjects) {
            const lastCommitData = userRepoProject.github_last_commit_data;
            const repoData = userRepoProject.github_repo_data;
            const languagesData = userRepoProject.github_languages_data;
            const languages = await this.getRepoLanguages(
                userRepoProject.github_languages_data
            );
            repos.push({
                repoData,
                languages,
                languagesData,
                lastCommitData,
                lastCommitUrl: (await axios.get(lastCommitData.url)).data
                    .html_url,
            });
        }

        return repos;
    }
}

import axios from "axios";

import {
    LastCommitData,
    Repository,
    UserRepo,
} from "../types/GithubRepository";

export class GithubService {
    private readonly baseUrl = "https://api.github.com";

    public async getRepos(): Promise<any> {
        const repos = await axios.get(`${this.baseUrl}/users/ryuuzu/repos`);
        return repos.data;
    }

    public async getProjectRepositoriesData(): Promise<UserRepo[]> {
        const projectRepositoryNames = [
            "ryuuzu/qr-share-react-native",
            "ryuuzu/ryuuzu.xyz",
            "ryuuzu/restaurant-page",
            "ryuuzu/etch-a-sketch",
            "ryuuzu/calculator",
            "ryuuzu/todo-project",
        ];
        const repos: UserRepo[] = [];
        for (const projectRepositoryName of projectRepositoryNames) {
            const lastCommitData = await this.getRepoLastCommit(
                projectRepositoryName
            );
            const repoData = await this.getRepo(projectRepositoryName);
            const languagesData = await this.getRepoLanguagesData(
                projectRepositoryName
            );
            const languages = await this.getRepoLanguages(languagesData);
            repos.push({
                repoData,
                languages,
                languagesData,
                lastCommitData,
                lastCommitUrl: (await axios.get(lastCommitData.url)).data
                    .html_url,
            });
        }
        console.log(repos);
        return repos;
    }

    public async getRepo(repoFullName: string): Promise<Repository> {
        const repo = await axios.get(`${this.baseUrl}/repos/${repoFullName}`);
        return repo.data;
    }

    public async getRepoLanguagesData(repoFullName: string): Promise<object> {
        const languages = await axios.get(
            `${this.baseUrl}/repos/${repoFullName}/languages`
        );
        return languages.data;
    }

    public async getRepoLanguages(languagesData: object): Promise<string[]> {
        const total = Object.values(languagesData).reduce((a, b) => a + b, 0);
        return Object.entries(languagesData).map(([key, value]) => {
            return `${key}: ${((value / total) * 100).toFixed(2)}%`;
        });
    }

    public async getRepoLastCommit(
        repoFullName: string
    ): Promise<LastCommitData> {
        const lastCommit = await axios.get(
            `${this.baseUrl}/repos/${repoFullName}/commits`
        );
        return lastCommit.data[0].commit;
    }
}

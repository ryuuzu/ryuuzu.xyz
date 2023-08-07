import { PinnedRepoData, UserRepo } from "../../@types/GithubRepository";
import axios from "axios";

export class GithubService {

    private readonly baseUrl = "https://api.github.com";
    private readonly pinnedRepoBaseUrl = "https://gh-pinned-repos.egoist.dev"

    public async getRepos(): Promise<any> {
        const repos = await axios.get(`${this.baseUrl}/users/ryuuzu/repos`);
        return repos.data;
    }

    public async getPinnedReposWithLanguagesAndCommit(): Promise<UserRepo[]> {
        const pinnedRepos = await this.getPinnedRepos();
        const repos: UserRepo[] = [];
        for (const pinnedRepo of pinnedRepos) {
            const languages = await this.getRepoLanguages(pinnedRepo.owner, pinnedRepo.repo);
            const lastCommit = await this.getRepoLastCommit(pinnedRepo.owner, pinnedRepo.repo);
            repos.push({
                repoData: pinnedRepo,
                languages,
                lastCommitUrl: (await axios.get(lastCommit.url)).data.html_url,
                lastCommitData: lastCommit
            });
        }
        return repos;
    }

    public async getPinnedRepos(): Promise<PinnedRepoData[]> {
        const pinnedRepos = await axios.get(`${this.pinnedRepoBaseUrl}/?username=ryuuzu`);
        return pinnedRepos.data;
    }

    public async getRepoLanguages(owner: string, repo: string): Promise<string[]> {
        const languages = await axios.get(`${this.baseUrl}/repos/${owner}/${repo}/languages`);
        return Object.keys(languages.data);
    }

    public async getRepoLastCommit(owner: string, repo: string): Promise<any> {
        const lastCommit = await axios.get(`${this.baseUrl}/repos/${owner}/${repo}/commits`);
        return lastCommit.data[0].commit;
    }

}
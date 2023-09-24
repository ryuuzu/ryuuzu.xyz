export type PinnedRepoData = {
    owner: string;
    repo: string;
    link: string;
    description?: string;
    image: string;
    website?: string;
    language?: string;
    languageColor?: string;
    stars: number | string;
    forks: number | string;
};

export type LastCommitData = {
    author: {
        name: string;
        email: string;
        date: string;
    };
    committer: {
        name: string;
        email: string;
        date: string;
    };
    message: string;
    tree: {
        sha: string;
        url: string;
    };
    url: string;
    verification: {
        verified: boolean;
        reason: string;
        signature: string;
        payload: string;
    };
};

export type UserRepo = {
    repoData: PinnedRepoData;
    languages?: string[];
    lastCommitUrl: string;
    lastCommitData: LastCommitData;
};

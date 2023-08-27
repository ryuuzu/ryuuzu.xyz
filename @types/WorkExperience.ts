export type WorkExperience = {
    company: {
        name: string;
        website: string;
        location: string;
    };
    position: string;
    duration: {
        start: string;
        end?: string;
    };
    description: string;
    tasks?: string[];
    skills: string[];
};

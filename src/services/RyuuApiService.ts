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
}

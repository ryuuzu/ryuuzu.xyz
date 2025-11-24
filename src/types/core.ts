export type TAcademicDegree = {
  name: string;
  institution: string;
  type: string;
  location: string;
  end?: string;
  major: string;
  description: string;
  website: string;
};

export type TCodeAward = {
  id: number;
  title: string;
  description: string;
  language: string;
  code_block: string;
};

export type TCredit = {
  title: string;
  link: string;
  description: string;
  images: Array<{
    image: string;
    alt: string;
    title: string;
  }>;
};

export type TNotFoundCounter = {
  not_found_count: number;
  user_agent: string;
  ip_address: string;
};

export type TSocialLink = {
  type: string;
  href: string;
};

export type TWorkExperience = {
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
  tasks?: Array<string>;
  skills: Array<string>;
};

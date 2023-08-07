"use client";

import { DM_Sans } from "next/font/google";
import {
	GitHub,
	Twitter,
	LinkedIn,
	Discord,
	PinAlt,
	ArrowTrCircle,
} from "iconoir-react";
import { useEffect, useState } from "react";
import { WorkExperience } from "../../@types/WorkExperience";
import { AcademicDegree } from "../../@types/AcademicDegree";
import { UserRepo } from "../../@types/GithubRepository";
import { GithubService } from "@/services/GithubService";
import { WorkExperiences } from "@/components/WorkExperience";
import { CvSeparator } from "@/components/CvSeparator";
import { Projects } from "@/components/Project";
import { AcademicDegrees } from "@/components/AcademicDegree";

const dmSans = DM_Sans({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
});

export default function Home() {
	const [workExperience, setWorkExperience] = useState<WorkExperience[]>([
		{
			company: {
				name: "Crocus Pearl Technologies",
				location: "Khusibun, Kathmandu, Nepal",
				website: "https://crocuspearl.com/",
			},
			position: "Back-end Intern",
			description:
				"A start-up company providing various design, development and digital marketing services.",
			duration: {
				start: "2023/02/01",
				// end: "2023-05-01",
			},
			skills: ["JavaScript", "PHP", "Laravel", "Python", "Django"],
		},
		{
			company: {
				name: "Islington College",
				location: "Kamalpokhari, Kathmandu, Nepal",
				website: "https://islington.edu.np/",
			},
			position: "Teaching Assistant",
			duration: {
				start: "2022/11/01",
				end: "2023/02/01",
			},
			description:
				"Teaching assistant for the course of Programming module which included Java.",
			tasks: [
				"Assisted Academics Department of the College",
				"Helped students with their assignments and projects",
				"Team Lead for an internal project for the College.",
			],
			skills: ["JavaScript", "Tailwind CSS", "Python", "Django"],
		},
	]);

	const [academicDegree, setAcademicDegree] = useState<AcademicDegree[]>([
		{
			name: "B.Sc. (Hons) Computing",
			institution: "Islington College",
			location: "Kamalpokhari, Kathmandu",
			website: "https://islington.edu.np/",
			description: "Currently pursuing a degree in Computing.",
		},
		{
			name: "SLC",
			institution: "Moonlight Higher Secondary School",
			location: "Kumaripati, Lalitpur",
			website: "https://molihss.edu.np/",
			end: "2020",
			description:
				"Completed high-school degree in Science stream focused on Physics, Chemistry and Mathematics.",
		},
		{
			name: "SEE",
			institution: "Nightingale International Secondary School",
			location: "Kupondole, Lalitpur",
			website: "https://nightingale.edu.np/",
			end: "2018",
			description:
				"Completed secondary education with distinction in English, Mathematics and Science.",
		},
	]);

	const [projects, setProjects] = useState<UserRepo[]>([]);

	useEffect(() => {
		const githubService = new GithubService();
		githubService.getPinnedReposWithLanguagesAndCommit().then((repos) => {
			setProjects(repos);
		});
	}, []);

	return (
		<main
			className={`flex min-h-screen w-full flex-col items-center sm:flex-row sm:items-stretch ${dmSans.className}`}
		>
			<div className="w-full flex-grow bg-white px-5 py-3 text-primary  sm:min-h-screen sm:w-3/4 sm:py-10 md:w-3/5">
				<div className="title-bar flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-0">
					<div className="header-text flex flex-row items-center gap-2 sm:flex-col sm:items-start sm:gap-1">
						<div className="name text-sm font-bold xs:text-lg sm:text-xl md:text-2xl lg:text-3xl">
							Utsav Gurmachhan Magar
						</div>
						<div className="separator block sm:hidden">|</div>
						<div className="position text-sm font-medium text-secondary xs:text-lg">
							Back-end Developer
						</div>
					</div>
					<div className="profile-links md: flex flex-row items-center gap-5 sm:text-base md:text-lg">
						<a
							href="https://github.com/ryuuzu/"
							className="transition-colors duration-300 hover:text-secondary"
							target="_blank"
						>
							<GitHub />
						</a>
						<a
							href="https://linkedin.com/in/utsavgurmachhan/"
							className="transition-colors duration-300 hover:text-secondary"
							target="_blank"
						>
							<LinkedIn />
						</a>
						<a
							href="https://twitter.com/UtsavGurmachhan/"
							className="transition-colors duration-300 hover:text-secondary"
							target="_blank"
						>
							<Twitter />
						</a>
						<a
							href="https://discord.com/users/331829647568535563"
							className="transition-colors duration-300 hover:text-secondary"
							target="_blank"
						>
							<Discord />
						</a>
					</div>
				</div>
				<WorkExperiences workExperiences={workExperience} />
				<CvSeparator />
				<Projects projects={projects} />
				<CvSeparator />
				<AcademicDegrees academicDegrees={academicDegree} />
			</div>
			<div className="w-full bg-primary px-5 py-8 text-white sm:min-h-screen sm:w-1/4 sm:py-10 md:w-2/5">
				<div>
					Hello, I am Utsav Gurmachhan. I am also called ryuuzu.{" "}
					<br />
					<br />I am a back-end developer based in Kathmandu, Nepal.
					With a passion of learning and building things, I am always
					looking for opportunities to learn and grow. I&apos;m
					constantly striving to stay up-to-date with the latest
					technology. <br /> <br />I am currently pursuing my
					Bachelor&apos;s degree in Computing from{" "}
					<a
						href="https://islington.edu.np/"
						className="text-white underline decoration-dotted underline-offset-4"
						target="_blank"
					>
						Islington College
					</a>
					. I am also working as a back-end intern at{" "}
					<a
						href="https://crocuspearl.com/"
						className="text-white underline decoration-dotted underline-offset-4"
						target="_blank"
					>
						Crocus Pearl Technologies
					</a>
					.
				</div>
				<a
					href="https://goo.gl/maps/JdGHKxArPFvGGv6w7"
					className="my-5 flex flex-row items-center gap-2 text-tertiary transition-colors duration-300 hover:text-slate-300"
					target="_blank"
				>
					<PinAlt /> <div>Chandragiri, Kathmandu, Nepal</div>
				</a>
				<a
					href="https://leonard.sh/"
					target="_blank"
					className="text-xs decoration-dotted underline-offset-2 hover:underline"
				>
					Inspired by Leonard
				</a>
			</div>
		</main>
	);
}

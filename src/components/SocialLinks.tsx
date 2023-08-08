import {
	GitHub,
	Twitter,
	LinkedIn,
	Discord,
	TikTok,
	Instagram,
} from "iconoir-react";

export const SocialLinks = () => (
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
		<a
			href="https://tiktok.com/@ryuuzu3118"
			className="transition-colors duration-300 hover:text-secondary"
			target="_blank"
		>
			<TikTok />
		</a>
		<a
			href="https://instagram.com/ryuuzu3118"
			className="transition-colors duration-300 hover:text-secondary"
			target="_blank"
		>
			<Instagram />
		</a>
	</div>
);

import {
	Discord,
	Github,
	Instagram,
	Linkedin,
	Mail,
	Tiktok,
	Twitter,
} from "iconoir-react";

export const getIcon = (iconName: string) => {
	switch (iconName) {
		case "mail":
			return <Mail />;
		case "github":
			return <Github />;
		case "linkedin":
			return <Linkedin />;
		case "twitter":
			return <Twitter />;
		case "discord":
			return <Discord />;
		case "tiktok":
			return <Tiktok />;
		case "instagram":
			return <Instagram />;
		default:
			return <Mail />;
	}
};

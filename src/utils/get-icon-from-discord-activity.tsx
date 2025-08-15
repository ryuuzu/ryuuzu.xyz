import { Code, Computer, Spotify } from "iconoir-react";

export const getIconFromDiscordActivity = (
	activityName: string,
	className?: string
) => {
	switch (activityName) {
		case "Spotify":
			return <Spotify className={className} />;
		case "Visual Studio Code":
			return <Code className={className} />;
		case "Code":
			return <Code className={className} />;
		default:
			return <Computer className={className} />;
	}
};

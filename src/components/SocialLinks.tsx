import { SocialLink } from "../../@types/SocialLink";

export const SocialLinks = ({ socialLinks }: { socialLinks: SocialLink[] }) => {
    return (
        <div className="profile-links flex flex-row items-center gap-5 sm:text-base md:text-lg lg:grid lg:grid-cols-4 xl:flex xl:grid-cols-none">
            {socialLinks.map((socialLink) => (
                <a
                    href={socialLink.href}
                    className="transition-colors duration-300 hover:text-secondary"
                    target="_blank"
                    key={socialLink.type}
                >
                    {socialLink.component}
                </a>
            ))}
        </div>
    );
};

import type { TSocialLink } from '@/types/core';

import { getIcon } from '@/utils/get-icon';

export const SocialLinks = ({
  socialLinks,
}: {
  socialLinks: Array<TSocialLink>;
}) => {
  return (
    <div className="profile-links flex flex-row items-center gap-5 sm:text-base md:text-lg lg:grid lg:grid-cols-4 xl:flex xl:grid-cols-none">
      {socialLinks.map((socialLink) => (
        <a
          href={socialLink.href}
          className="hover:text-secondary transition-colors duration-300"
          target="_blank"
          key={socialLink.type}
        >
          {getIcon(socialLink.type)}
        </a>
      ))}
    </div>
  );
};

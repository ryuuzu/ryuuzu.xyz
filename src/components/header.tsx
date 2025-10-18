import { useQuery } from '@tanstack/react-query';
import { NavLink } from 'react-router';

import { SocialLinks } from '@/components/social-links';
import { useGlobalStore } from '@/store/global';

export const Header = ({
  title,
  subTitle,
}: {
  title: string;
  subTitle: string;
}) => {
  const { socialLinks, getSocialLinks } = useGlobalStore();

  useQuery({
    queryKey: ['get', 'social-links'],
    queryFn: getSocialLinks,
  });

  return (
    <div className="title-bar flex flex-col items-center gap-3 sm:flex-row sm:justify-between sm:gap-0 md:flex-col lg:flex-row">
      <div className="header-text flex flex-row items-center gap-2 sm:flex-col sm:items-start sm:gap-1 md:flex-row md:items-center lg:flex-col lg:items-start">
        <NavLink
          to={'/'}
          className="name xs:text-lg text-sm font-bold sm:text-xl md:text-lg lg:text-3xl"
        >
          {title}
        </NavLink>
        <div className="separator block sm:hidden md:block lg:hidden">|</div>
        <div className="position text-secondary xs:text-lg text-sm font-medium md:text-base lg:text-lg">
          {subTitle}
        </div>
      </div>
      <SocialLinks socialLinks={socialLinks} />
    </div>
  );
};

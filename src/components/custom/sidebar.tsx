import { useMutation } from '@tanstack/react-query';
import { Link } from '@tanstack/react-router';
import { formatDistance } from 'date-fns';
import { FileUser, FolderGit, House, MapPin } from 'lucide-react';
import React, { useMemo } from 'react';
import { toast } from 'sonner';

import { API_ROUTES } from '@/config/routes';
import axios from '@/lib/axios';
import { useGlobalStore } from '@/stores/global';

type TBaseNavigation = {
  onClick?: () => void;
  href?: string;
  component: React.ReactNode;
};

type TNavigationLink = TBaseNavigation & {
  href: string;
};

type TNavigationButton = TBaseNavigation & {
  onClick: () => void;
};

export const Sidebar = () => {
  const { academicDegrees, workExperiences } = useGlobalStore();
  const pathname = window.location.pathname;

  const totalWorkingExperience = useMemo(() => {
    if (workExperiences.length === 0) return '0 years';
    const totalExperience = workExperiences.reduce((total, experience) => {
      if (experience.position.includes('Freelance')) return total; // Skip freelance positions
      const start = new Date(experience.duration.start);
      const end = experience.duration.end
        ? new Date(experience.duration.end)
        : new Date();
      return total + (end.getTime() - start.getTime());
    }, 0);
    const years = Math.floor(totalExperience / (1000 * 60 * 60 * 24 * 365));
    return `${years} year${years > 1 ? 's' : ''}`;
  }, [workExperiences]);

  const downloadResume = async () => {
    const response = await axios.get(API_ROUTES.RESUME, {
      responseType: 'blob',
    });
    const fileURL = window.URL.createObjectURL(new Blob([response.data]));
    const fileLink = document.createElement('a');
    fileLink.href = fileURL;
    fileLink.setAttribute('download', 'Utsav_Gurmachhan_Resume.pdf');
    document.body.appendChild(fileLink);
    fileLink.click();
    fileLink.remove();
  };

  const { mutateAsync: downloadResumeAsync } = useMutation({
    mutationFn: downloadResume,
  });

  const navigationLinks: Array<TNavigationLink | TNavigationButton> = [
    {
      href: '/',
      component: (
        <>
          <House className={'size-4'} />
          <span className="text-sm">Home</span>
        </>
      ),
    },
    {
      href: '/projects',
      component: (
        <>
          <FolderGit className={'size-4'} />
          <span className="text-sm">Projects</span>
        </>
      ),
    },
    {
      onClick: () => {
        toast.promise(() => downloadResumeAsync(), {
          loading: 'Downloading resume...',
          success: () => 'Resume downloaded.',
          error: 'Error',
        });
      },
      component: (
        <>
          <FileUser className={'size-4'} />
          <span className="text-sm">Resume</span>
        </>
      ),
    },
  ];

  return (
    <div className="bg-primary w-full overflow-auto px-5 py-8 text-base text-white sm:min-h-screen sm:py-10 md:max-h-screen md:w-2/5 md:text-sm lg:text-base">
      <div>
        Hi, I&apos;m <span className="text-tertiary">Utsav Gurmachhan</span>,
        also known as <span className="text-tertiary">&quot;ryuuzu&quot;</span>{' '}
        in the universe of online games and platforms. Personally, I like to
        think of myself as the know and try it all jack of all trades. I,
        sometimes, am a gamer, a cook, clean freak, an organizer but most of all
        a developer, a full-stack one at hand.
        <br /> <br />I have got my hands on different programming languages and
        out of all of them,{' '}
        <strong className="underline decoration-dotted underline-offset-4">
          Python
        </strong>{' '}
        remains my all-time favorite and unbeaten. Although I have undying love
        for{' '}
        <strong className="underline decoration-dotted underline-offset-4">
          Python
        </strong>
        , I am also well-versed in JavaScript, TypeScript, and front-end
        frameworks like React, and Next. I haven&apos;t attempted any backend
        development in JavaScript due to my loyalty to{' '}
        <strong className="underline decoration-dotted underline-offset-4">
          Python
        </strong>{' '}
        and its popular web framework Django. I can use Django to create a
        full-fledged web application with the help of HTML/CSS and some
        JavaScript. I have also experienced the hardships of deploying such
        applications so that my lovely Python web applications can easily rest
        in the clouds and serve the requests from users happily. I quote{' '}
        <em>
          <strong>Cory &quot;cr0ybot&quot; Hughart</strong>
        </em>{' '}
        who inspired me to write my introductions,{' '}
        <em>
          &quot;A full-stack developer knows no bounds. And when they find one
          they cross it without hesitation, boldly going into the unknown to
          return richer for it.&quot;
        </em>
        <br /> <br />
        {academicDegrees.length > 0 && (
          <>
            {academicDegrees[0].end ? (
              <>
                I have completed my {academicDegrees[0].type} in{' '}
                {academicDegrees[0].major} from{' '}
                <a
                  href={academicDegrees[0].website}
                  className="text-white underline decoration-dotted underline-offset-4"
                  target="_blank"
                >
                  {academicDegrees[0].institution}
                </a>
                .
              </>
            ) : (
              <>
                I am currently pursuing my {academicDegrees[0].type} in{' '}
                {academicDegrees[0].major} from{' '}
                <a
                  href={academicDegrees[0].website}
                  className="text-white underline decoration-dotted underline-offset-4"
                  target="_blank"
                >
                  {academicDegrees[0].institution}
                </a>
                .
              </>
            )}
          </>
        )}{' '}
        {workExperiences.length > 0 && (
          <>
            {workExperiences[0].duration.end ? (
              <>
                I have worked as a {workExperiences[0].position} at{' '}
                <a
                  href={workExperiences[0].company.website}
                  className="text-white underline decoration-dotted underline-offset-4"
                  target="_blank"
                >
                  {workExperiences[0].company.name}
                </a>{' '}
                for{' '}
                {formatDistance(
                  new Date(workExperiences[0].duration.start),
                  new Date(workExperiences[0].duration.end)
                )}
                .
              </>
            ) : (
              <>
                I am working currently as a {workExperiences[0].position} at{' '}
                <a
                  href={workExperiences[0].company.website}
                  className="text-white underline decoration-dotted underline-offset-4"
                  target="_blank"
                >
                  {workExperiences[0].company.name}
                </a>{' '}
                for past{' '}
                {formatDistance(
                  new Date(workExperiences[0].duration.start),
                  new Date()
                )}
                .
              </>
            )}
          </>
        )}
        {totalWorkingExperience !== '0 years' && (
          <>
            <br />
            <br />I have a total of {totalWorkingExperience} of working
            experience in the field of software development.
          </>
        )}
      </div>
      <div className="mt-5 flex flex-row justify-between gap-2 text-xl">
        {navigationLinks
          .filter(
            (navigationLink) =>
              (navigationLink.href && navigationLink.href !== pathname) ||
              navigationLink.onClick
          )
          .map((navigationLink) => {
            const className =
              'flex w-full items-center gap-2 rounded-sm border border-white/25 px-3 py-2 cursor-pointer';
            if (navigationLink.onClick) {
              return (
                <button className={className} onClick={navigationLink.onClick}>
                  {navigationLink.component}
                </button>
              );
            }
            return (
              <Link
                to={navigationLink.href}
                key={navigationLink.href}
                className={className}
              >
                {navigationLink.component}
              </Link>
            );
          })}
      </div>
      <a
        href="https://goo.gl/maps/JdGHKxArPFvGGv6w7"
        rel="noopener noreferrer"
        className="text-tertiary my-5 flex flex-row items-center gap-2 transition-colors duration-300 hover:text-slate-300"
        target="_blank"
      >
        <MapPin />
        <div>Chandragiri, Kathmandu, Nepal</div>
      </a>
    </div>
  );
};

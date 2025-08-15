import { formatDistanceToNow } from 'date-fns';
import {
  // Copyright,
  // DownloadCircle,
  // Home,
  MapPin,
  // Medal1st,
} from 'iconoir-react';
import {
  // type ReactNode,
  useEffect,
  useState,
} from 'react';
// import { useLocation } from 'react-router';
// @ts-expect-error: This doesn't have a type definition
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';
import { useLanyard } from 'react-use-lanyard';

import {
  PrimaryCvSeparator,
  SecondaryCvSeparator,
} from '@/components/cv-separator';
import { getIconFromDiscordActivity } from '@/utils/get-icon-from-discord-activity';

export function SideBar({ children }: { children: React.ReactNode }) {
  // const { pathname } = useLocation();

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const { loading, status } = useLanyard({
    userId: '331829647568535563',
    socket: true,
  });

  // const PageLink = ({
  //   href,
  //   children,
  // }: {
  //   href: string;
  //   children: React.ReactNode;
  // }) => (
  //   <a
  //     href={href}
  //     className="hover:bg-secondary flex w-1/2 flex-row items-center justify-center rounded-md py-2 transition-colors duration-300"
  //   >
  //     {children}
  //   </a>
  // );
  //
  // const navigationLinks: { href: string; component: ReactNode }[] = [
  //   {
  //     href: '/',
  //     component: (
  //       <>
  //         <Home /> <span className="text-sm">Home</span>
  //       </>
  //     ),
  //   },
  //   {
  //     href: '/hallofcodes',
  //     component: (
  //       <>
  //         <Medal1st /> <span className="text-sm">Hall of Codes</span>
  //       </>
  //     ),
  //   },
  //   {
  //     href: '/credits',
  //     component: (
  //       <>
  //         <Copyright /> <span className="text-sm">Credits</span>
  //       </>
  //     ),
  //   },
  //   {
  //     href: '/cv',
  //     component: (
  //       <>
  //         <DownloadCircle /> <span className="text-sm">Resume</span>
  //       </>
  //     ),
  //   },
  // ];

  return (
    <div className="bg-primary w-full overflow-auto px-5 py-8 text-base text-white sm:min-h-screen sm:py-10 md:max-h-screen md:w-2/5 md:text-sm lg:text-base">
      <div>{children}</div>
      {/*<div className="mt-5 flex flex-row justify-between gap-2 text-xl">*/}
      {/*  {navigationLinks*/}
      {/*    .filter((navigationLink) => navigationLink.href !== pathname)*/}
      {/*    .map((navigationLink) => (*/}
      {/*      <PageLink href={navigationLink.href} key={navigationLink.href}>*/}
      {/*        {navigationLink.component}*/}
      {/*      </PageLink>*/}
      {/*    ))}*/}
      {/*</div>*/}
      <a
        href="https://goo.gl/maps/JdGHKxArPFvGGv6w7"
        className="text-tertiary my-5 flex flex-row items-center gap-2 transition-colors duration-300 hover:text-slate-300"
        target="_blank"
      >
        <MapPin />
        <div>Chandragiri, Kathmandu, Nepal</div>
      </a>
      {!loading && status?.activities ? (
        <>
          {status?.activities.length > 0 && (
            <>
              <PrimaryCvSeparator />
              <h1 className="text-tertiary pb-1 text-lg font-bold sm:pb-2 sm:text-xl">
                {status?.activities.length > 1
                  ? 'Current Activities'
                  : 'Current Activity'}
              </h1>
              {/* {status?.activities
                .filter((activity) => activity.name.includes('Spotify'))
                .map((activity) => (
                  <div
                    key={activity.id}
                    className="flex flex-row items-center gap-2 md:gap-4"
                  >
                    {getIconFromDiscordActivity(
                      activity.name,
                      'h-full text-xl md:text-2xl'
                    )}
                    <div className="song-details flex h-fit w-full flex-row items-center justify-between">
                      <div className="song-info flex flex-col gap-1">
                        <a
                          className="song-title cursor-pointer text-lg font-bold hover:underline"
                          href={
                            'https://open.spotify.com/track/' +
                            status.spotify?.track_id
                          }
                          target="_blank"
                        >
                          {activity.details}
                        </a>
                        <div className="artist-name text-sm">
                          {activity.state.replace(';', ',')} (on{' '}
                          {activity.assets?.large_text})
                        </div>
                      </div>
                      <div className="song-progres max-h-full">
                        <Progress
                          type="circle"
                          percent={
                            ((currentTime.getTime() -
                              (activity.timestamps?.start ?? 0)) /
                              ((activity.timestamps?.end ?? 0) -
                                (activity.timestamps?.start ?? 0))) *
                            100
                          }
                          width={60}
                          theme={{
                            success: {
                              symbol: status.spotify?.album_art_url ? (
                                <img
                                  src={status.spotify?.album_art_url}
                                  width={50}
                                  height={50}
                                  className="ring-tertiary rounded-full ring-2"
                                  alt="Current Playing Album Art"
                                />
                              ) : (
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="50"
                                  height="50"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="feather feather-music"
                                >
                                  <path d="M12 3v10.55a4 4 0 1 0 2 3.45M12 3L8 5m4-2l4 2m-4 0v10.55a4 4 0 1 1-2-3.45V3z"></path>
                                </svg>
                              ),
                              color: 'white',
                              trailColor: '#B4B8C635',
                            },
                          }}
                          symbolClassName={'animate-spin-slow'}
                          status={'success'}
                        />
                      </div>
                    </div>
                  </div>
                ))} */}
              {status?.activities
                .filter((activity) => !activity.name.includes('Spotify'))
                .map((activity, index) => (
                  <div key={activity.id}>
                    {(status?.activities.filter((activity) =>
                      activity.name.includes('Spotify')
                    ).length > 0 ||
                      index !== 0) && (
                      <SecondaryCvSeparator className="mx-5 my-2 opacity-50" />
                    )}
                    <div className="flex flex-row items-center gap-2 md:gap-4">
                      {getIconFromDiscordActivity(
                        activity.name,
                        'h-full text-xl md:text-2xl'
                      )}
                      <div className="flex h-fit w-full flex-row items-center justify-between">
                        <div>
                          <div className="text-lg font-bold">
                            {activity.name}
                          </div>
                          <div className="text-sm">
                            <div>
                              {activity.details ||
                                'Started ' +
                                  (activity.timestamps?.start
                                    ? formatDistanceToNow(
                                        new Date(activity.timestamps?.start),
                                        {
                                          addSuffix: true,
                                        }
                                      )
                                    : '')}
                            </div>
                          </div>
                          <div className="text-xs">
                            {activity.state && <div>{activity.state}</div>}
                            {activity.assets?.large_text && (
                              <span>{activity.assets?.large_text}</span>
                            )}
                            {activity.assets?.small_text && (
                              <>
                                {' '}
                                - <span>{activity.assets?.small_text}</span>
                              </>
                            )}
                          </div>
                        </div>
                        <div className="max-h-full">
                          {activity.assets?.large_image &&
                            activity.application_id ===
                              '782685898163617802' && (
                              <>
                                {activity.assets?.large_image ? (
                                  <img
                                    src={
                                      'https://' +
                                      activity.assets?.large_image.split(
                                        'https/'
                                      )[1]
                                    }
                                    width={60}
                                    height={60}
                                    className="ring-tertiary rounded-full ring-2"
                                    alt="Current Playing Album Art"
                                  />
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="50"
                                    height="50"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="feather feather-music"
                                  >
                                    <path d="M12 3v10.55a4 4 0 1 0 2 3.45M12 3L8 5m4-2l4 2m-4 0v10.55a4 4 0 1 1-2-3.45V3z"></path>
                                  </svg>
                                )}
                              </>
                            )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </>
          )}
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

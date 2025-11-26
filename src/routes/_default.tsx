import { Outlet, createFileRoute } from '@tanstack/react-router';
import { useEffect } from 'react';

import CookieConsentBanner from '@/components/custom/cookie-consent-banner';
import { Header } from '@/components/custom/header';
import { Sidebar } from '@/components/custom/sidebar';
import {
  academicDegreesQueryOptions,
  socialLinksQueryOptions,
  workExperiencesQueryOptions,
} from '@/contracts/queries/core';
import { useGlobalStore } from '@/stores/global';

export const Route = createFileRoute('/_default')({
  component: RouteComponent,
  loader: async ({ context: { queryClient } }) => {
    const workExperiences = await queryClient.ensureQueryData(
      workExperiencesQueryOptions()
    );
    const academicDegrees = await queryClient.ensureQueryData(
      academicDegreesQueryOptions()
    );
    const socialLinks = await queryClient.ensureQueryData(
      socialLinksQueryOptions()
    );

    return { workExperiences, academicDegrees, socialLinks };
  },
});

function RouteComponent() {
  const { workExperiences, academicDegrees, socialLinks } =
    Route.useLoaderData();

  const { setWorkExperiences, setAcademicDegrees, setSocialLinks } =
    useGlobalStore();

  useEffect(() => {
    setWorkExperiences(workExperiences);
  }, [workExperiences, setWorkExperiences]);

  useEffect(() => {
    setAcademicDegrees(academicDegrees);
  }, [academicDegrees, setAcademicDegrees]);

  useEffect(() => {
    setSocialLinks(socialLinks);
  }, [socialLinks, setSocialLinks]);

  return (
    <main
      className={`flex min-h-screen w-full flex-col items-center sm:items-stretch md:flex-row`}
    >
      <div className="text-primary scrollbar-thumb-primary scrollbar-thin scrollbar-thumb-rounded-full flex w-full flex-grow flex-col gap-4 overflow-auto bg-white px-5 py-3 sm:min-h-screen sm:gap-8 sm:py-10 md:max-h-screen md:w-3/5">
        <Header
          title="Utsav Gurmachhan Magar"
          subTitle="Full-stack Developer"
        />
        <Outlet />
      </div>
      <Sidebar />
      <CookieConsentBanner />
    </main>
  );
}

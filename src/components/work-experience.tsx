import { format } from 'date-fns';

import { SecondaryCvSeparator } from '@/components/cv-separator';
import Loading from '@/components/loading';
import { type TWorkExperience } from '@/types/work-experience';

const WorkExperience = ({
  workExperience,
}: {
  workExperience: TWorkExperience;
}) => {
  return (
    <>
      <div>
        <div className="work-experience-top text-secondary flex flex-col text-sm font-bold sm:flex-row sm:justify-between">
          <div>
            <div className="sm:pb-1">
              <a
                href={workExperience.company.website}
                className="text-primary underline decoration-dotted underline-offset-4"
              >
                {workExperience.company.name}
              </a>
              {', '}
              {workExperience.position}
            </div>
            <div>{workExperience.company.location}</div>
          </div>
          <div>
            {format(new Date(workExperience.duration.start), 'LLL yyyy')} -{' '}
            {workExperience.duration.end
              ? format(new Date(workExperience.duration.end), 'LLL yyyy')
              : 'Present'}
          </div>
        </div>
        <div className="work-experience-description mt-1 text-sm font-medium">
          {workExperience.description}
        </div>
        {workExperience.tasks && (
          <div className="work-experience-tasks mt-2 text-sm font-medium">
            <ul className="list-inside list-disc">
              {workExperience.tasks.map((task, index) => {
                return (
                  <li
                    key={`${workExperience.company.name.toLowerCase()}-task-${index}`}
                  >
                    {task}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
        <div className="work-experience-skills mt-2 text-sm font-medium">
          <span className="font-bold">Skills: </span>
          {workExperience.skills.join(' ⚫ ')}
        </div>
      </div>
    </>
  );
};

export const WorkExperiences = ({
  workExperiences,
  isLoading,
}: {
  workExperiences: TWorkExperience[];
  isLoading: boolean;
}) => (
  <div className="work-experiences pt-4 sm:pt-10">
    <h4 className="text-tertiary pb-1 text-xl font-bold sm:pb-2 sm:text-2xl">
      Work
    </h4>
    {!isLoading ? (
      <>
        {workExperiences.length >= 1 ? (
          <>
            {workExperiences.map((workExperience, index) => {
              return (
                <div
                  key={`${workExperience.company.name.toLowerCase()}-work-experience-${index}`}
                >
                  <WorkExperience workExperience={workExperience} />
                  {index < workExperiences.length - 1 && (
                    <SecondaryCvSeparator />
                  )}
                </div>
              );
            })}
          </>
        ) : (
          <div>Looks like there are no work experiences.</div>
        )}
      </>
    ) : (
      <Loading />
    )}
  </div>
);

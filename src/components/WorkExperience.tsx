import { WorkExperience } from "../../@types/WorkExperience";
import Loading from "./Loading";

const WorkExperience = ({
    workExperience,
}: {
    workExperience: WorkExperience;
}) => {
    let startDate = new Date(workExperience.duration.start);
    let endDate = workExperience.duration.end
        ? new Date(workExperience.duration.end)
        : "Present";
    return (
        <>
            <div>
                <div className="work-experience-top flex flex-col text-sm font-bold text-secondary sm:flex-row sm:justify-between">
                    <div>
                        <div className="sm:pb-1">
                            <a
                                href={workExperience.company.website}
                                className="text-primary underline decoration-dotted underline-offset-4 "
                            >
                                {workExperience.company.name},
                            </a>{" "}
                            {workExperience.position}
                        </div>
                        <div>{workExperience.company.location}</div>
                    </div>
                    <div>
                        {startDate.toLocaleString("default", {
                            month: "short",
                            year: "numeric",
                        })}{" "}
                        -{" "}
                        {endDate.toLocaleString("default", {
                            month: "short",
                            year: "numeric",
                        })}
                    </div>
                </div>
                <div className="work-experience-description mt-1 text-sm font-medium  ">
                    {workExperience.description}
                </div>
                {workExperience.tasks && (
                    <div className="work-experience-tasks mt-2 text-sm font-medium ">
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
                <div className="work-experience-skills mt-2 text-sm font-medium ">
                    <span className="font-bold">Skills: </span>
                    {workExperience.skills.join(" ⚫ ")}
                </div>
            </div>
        </>
    );
};

export const WorkExperiences = ({
    workExperiences,
}: {
    workExperiences: WorkExperience[];
}) => (
    <div className="work-experiences pt-4 sm:pt-10">
        <h4 className="pb-1 text-xl font-bold text-tertiary sm:pb-2 sm:text-2xl">
            Work
        </h4>
        {workExperiences && workExperiences?.length >= 1 ? (
            <>
                {workExperiences.map((workExperience, index) => {
                    return (
                        <div
                            key={`${workExperience.company.name.toLowerCase()}-work-experience-${index}`}
                        >
                            <WorkExperience workExperience={workExperience} />
                            {index < workExperiences.length - 1 && (
                                <div className="work-experience-separator my-5 border-b border-dotted border-tertiary"></div>
                            )}
                        </div>
                    );
                })}
            </>
        ) : (
            <Loading />
        )}
    </div>
);

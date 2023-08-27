import { format } from "date-fns";
import { AcademicDegree } from "../../@types/AcademicDegree";
import Loading from "./Loading";

const AcademicDegree = ({
    academicDegree,
}: {
    academicDegree: AcademicDegree;
}) => {
    return (
        <div>
            <div className="education-degree-top flex flex-col text-sm font-bold text-secondary sm:flex-row sm:justify-between">
                <div className="sm:pb-1">
                    <a
                        href={academicDegree.website}
                        className="text-primary underline decoration-dotted underline-offset-4"
                    >
                        {academicDegree.institution}
                    </a>{", "}
                    {academicDegree.name}
                </div>
                <div>
                    {academicDegree.end ? format(new Date(academicDegree.end), "yyyy") : "Current"}
                </div>
            </div>
            <div className="education-degree-description mt-1 text-sm font-medium ">
                {academicDegree.description}
            </div>
        </div>
    );
};

export const AcademicDegrees = ({
    academicDegrees, isLoading
}: {
    academicDegrees: AcademicDegree[];
    isLoading: boolean;
}) => (
    <div className="education">
        <h4 className="pb-1 text-xl font-bold text-tertiary sm:pb-2 sm:text-2xl">
            Education
        </h4>
        {!isLoading ? (
            <>
                {academicDegrees.length >= 1 ? (
                    <>
                        {academicDegrees.map((academicDegree, index) => {
                            return (
                                <div
                                    key={`${academicDegree.name}-${academicDegree.institution}`}
                                >
                                    <AcademicDegree academicDegree={academicDegree} />
                                    {index < academicDegrees.length - 1 && (
                                        <div className="education-separator my-5"></div>
                                    )}
                                </div>
                            );
                        })}
                    </>
                ) : (
                    <div>Looks like there are no degrees to show.</div>
                )}
            </>
        ) : (
            <Loading />
        )}
    </div>
);

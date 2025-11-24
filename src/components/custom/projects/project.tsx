import type { TProject } from '@/types/project';

export const Project = ({ project }: { project: TProject }) => (
  <div className="project flex flex-col justify-between gap-2">
    <div>
      <div className="project__title text-primary flex items-center gap-2">
        {project.link ? (
          <a
            href={project.link}
            target="_blank"
            className="underline decoration-dotted underline-offset-4"
          >
            {project.title}
          </a>
        ) : (
          <div className="underline decoration-dotted underline-offset-4">
            {project.title}
          </div>
        )}
      </div>
      <div className="project__description mt-1 text-sm font-medium">
        {project.description}
      </div>
    </div>
    {project.features.length > 0 && (
      <div>
        <div className="underline decoration-dotted underline-offset-4">
          Features
        </div>
        <div className="project__features mt-2 text-sm font-medium">
          <ul className={'list-inside list-disc'}>
            {project.features.map((feature, index) => (
              <li key={`${project.title}-feature-${index}`}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    )}
    {project.images.length > 0 && (
      <div>
        <div className="underline decoration-dotted underline-offset-4">
          Screenshots
        </div>
        <div
          className={
            'scrollbar-thumb-primary scrollbar-thin scrollbar-thumb-rounded-full mt-1 flex snap-x flex-row gap-2 overflow-x-auto'
          }
        >
          {project.images.map((image, index) => (
            <img
              src={image.image.image}
              className={
                'max-w-full snap-center rounded-md shadow-md md:max-w-1/3 md:snap-start'
              }
              key={`${project.title} Screenshot ${index}`}
              alt={image.image.alt_text}
            />
          ))}
        </div>
      </div>
    )}
    {project.languages_used.length > 0 && (
      <div className="project-languages mt-2 text-sm font-medium">
        <span className="font-bold">Languages: </span>
        {project.languages_used.join(' ⚫ ')}
      </div>
    )}
  </div>
);

import { cn } from '@/lib/utils';

export const CvHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h4 className={cn('text-tertiary text-xl font-bold sm:text-2xl', className)}>
    {children}
  </h4>
);

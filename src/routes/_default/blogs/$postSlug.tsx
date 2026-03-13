import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_default/blogs/$postSlug')({
  component: RouteComponent,
});

function RouteComponent() {
  const { postSlug } = Route.useParams();
  return <div>Hello "/_default/blogs/{postSlug}"!</div>;
}

import { TanStackDevtools } from '@tanstack/react-devtools';
import type { QueryClient } from '@tanstack/react-query';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools';
import { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity';

import { Toaster } from '@/components/ui/sonner';
import TanStackQueryDevtools from '@/integrations/tanstack-query/devtools';

interface MyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => {
    useEffect(() => {
      const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID;

      if (import.meta.env.PROD && clarityProjectId) {
        clarity.init(clarityProjectId);
        console.log('Microsoft Clarity initialized.');
      }
    }, []);

    return (
      <>
        <Outlet />
        <Toaster position={'top-center'} />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
            TanStackQueryDevtools,
          ]}
        />
      </>
    );
  },
});

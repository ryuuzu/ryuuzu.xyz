import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity';
import { RouterProvider, createBrowserRouter } from 'react-router';

import { BaseLayout } from '@/layouts/base';
import { Projects } from '@/pages/projects';

import { Home } from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BaseLayout />,
    children: [
      {
        index: true, // same as path: ''
        element: <Home />,
      },
      {
        path: 'projects',
        element: <Projects />,
      },
    ],
  },
]);

const queryClient = new QueryClient();

function App() {
  useEffect(() => {
    // Get the Project ID from environment variables
    const clarityProjectId = import.meta.env.VITE_CLARITY_PROJECT_ID;

    // Only initialize Clarity in production AND if the Project ID exists
    if (import.meta.env.PROD && clarityProjectId) {
      clarity.init(clarityProjectId);
      console.log('Microsoft Clarity initialized.');
    }
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

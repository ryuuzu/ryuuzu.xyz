import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useEffect } from 'react';
import { clarity } from 'react-microsoft-clarity';
import { RouterProvider, createBrowserRouter } from 'react-router';

import { Home } from './pages/home';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
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

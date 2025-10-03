import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
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
  if (import.meta.env.DEV) {
    clarity.init('impchiwk8z');
  }

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;

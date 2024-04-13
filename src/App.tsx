import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import RootRoutes from './RootRoutes';

const App = () => {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <RootRoutes />
    </QueryClientProvider>
  );
};

export default App;

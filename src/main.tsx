import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { QueryCache, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RecoilRoot } from 'recoil';

import App from './App.tsx';

const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: error => {
      console.error(`문제가 발생했습니다. ${error.message}`);
    },
  }),
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </RecoilRoot>
  </StrictMode>
);

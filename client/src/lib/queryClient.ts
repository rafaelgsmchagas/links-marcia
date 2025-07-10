import { QueryClient } from '@tanstack/react-query';

// Create a query client for the frontend
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // For static deployment, disable queries by default
      enabled: false,
      retry: false,
      staleTime: Infinity,
    },
  },
});

// Simple fetch function for API calls (if needed)
export async function apiRequest(url: string, options: RequestInit = {}) {
  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
    ...options,
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return response.json();
}
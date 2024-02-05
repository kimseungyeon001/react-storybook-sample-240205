import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { PatternFirstPage } from './components/pages/PatternFirstPage'
import { PatternSecondPage } from './components/pages/PatternSecondPage/PatternSecondPage'

// eslint-disable-next-line react-refresh/only-export-components
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: false,
    },
  },
})

// export const queryClient = new QueryClient({})

const router = createBrowserRouter([
  {
    path: '/pattern-first',
    element: <PatternFirstPage />,
  },
  {
    path: '/pattern-second',
    element: <PatternSecondPage />,
  },
])

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  )
}

export default App

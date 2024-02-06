import { useQuery } from '@tanstack/react-query'
import { DefaultLayout } from '@/components/common/DefaultLayout'
import { ErrorPage } from '@/components/pages/ErrorPage'
import { LoadingPage } from '@/components/pages/LoadingPage'
import { config } from '@/config'

const { baseUrl } = config

export function PatternSecondPage() {
  const initialData = ''
  const {
    isFetching,
    data = initialData,
    error,
  } = useQuery({
    queryKey: ['page'],
    queryFn: async (): Promise<string> => {
      const response = await fetch(`${baseUrl}/page`)
      return response.json()
    },
  })

  if (isFetching) return <LoadingPage message="loading message" />
  if (error != null) return <ErrorPage message={error.message} />
  return (
    <DefaultLayout>
      <div className="flex justify-center items-center h-full">{data}</div>
    </DefaultLayout>
  )
}

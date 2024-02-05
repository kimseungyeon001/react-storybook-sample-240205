import { useQuery } from '@tanstack/react-query'
import { DefaultLayout } from '../../common/DefaultLayout'
import { ErrorPage } from '../ErrorPage'
import { LoadingPage } from '../LoadingPage'
import { config } from '../../../config'

const baseUrl = config.baseUrl

interface PatternFirstPagePresenterProps {
  isLoading: boolean
  errorMessage?: string
  data: string
}

export function PatternFirstPagePresenter({
  isLoading,
  errorMessage,
  data,
}: PatternFirstPagePresenterProps) {
  if (isLoading) return <LoadingPage message="loading message" />
  if (errorMessage) return <ErrorPage message={errorMessage} />
  return (
    <DefaultLayout>
      <div className="flex justify-center items-center h-full">{data}</div>
    </DefaultLayout>
  )
}

export function PatternFirstPage() {
  const initialData = ''
  const {
    isFetching,
    data = initialData,
    error,
  } = useQuery({
    queryKey: ['page'],
    queryFn: async (): Promise<string> => {
      const response = await fetch(baseUrl + '/page')
      return response.json()
    },
  })

  return (
    <PatternFirstPagePresenter
      isLoading={isFetching}
      errorMessage={error?.message}
      data={data}
    />
  )
}

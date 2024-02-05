import { DefaultLayout } from '../../common/DefaultLayout'

interface ErrorPageProps {
  message: string
}

export function ErrorPage({ message }: ErrorPageProps) {
  return (
    <DefaultLayout>
      <div className="flex justify-center items-center h-full">{message}</div>
    </DefaultLayout>
  )
}

import type { Meta, StoryObj } from '@storybook/react'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '../../../App'
import {
  buildFetch,
  buildFetchLoading,
  buildFetchError,
} from '../../../mocks/handlers'

import { PatternSecondPage } from './PatternSecondPage'

const meta: Meta<typeof PatternSecondPage> = {
  component: PatternSecondPage,
  decorators: [
    (Story) => (
      <QueryClientProvider client={queryClient}>
        <Story />
      </QueryClientProvider>
    ),
  ],
}
export default meta

type Story = StoryObj<typeof PatternSecondPage>

export const WithData: Story = {
  render: (_args) => <PatternSecondPage />,
  parameters: {
    msw: [buildFetch()],
  },
}

// NOTE: api pending status is not correct working
// export const Loading: Story = {
//   render: (_args) => <PatternSecondPage />,
//   parameters: {
//     msw: [buildFetchLoading()],
//   },
// }

export const Error: Story = {
  render: (_args) => <PatternSecondPage />,
  parameters: {
    msw: [buildFetchError()],
  },
}

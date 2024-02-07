import type { Meta, StoryObj } from '@storybook/react'
import { StorybookWrapper } from '@/utils/StorybookWrapper'
import {
  buildFetch,
  buildFetchLoading,
  buildFetchError,
} from '@/mocks/handlers'

import { PatternSecondPage } from './PatternSecondPage'

const meta: Meta<typeof PatternSecondPage> = {
  component: PatternSecondPage,
  decorators: [
    (Story) => (
      <StorybookWrapper>
        <Story />
      </StorybookWrapper>
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

export const Loading: Story = {
  render: (_args) => <PatternSecondPage />,
  parameters: {
    msw: [buildFetchLoading()],
  },
}

export const Error: Story = {
  render: (_args) => <PatternSecondPage />,
  parameters: {
    msw: [buildFetchError()],
  },
}

import type { Meta, StoryObj } from '@storybook/react'

import { PatternFirstPagePresenter } from './PatternFirstPage'

const meta: Meta<typeof PatternFirstPagePresenter> = {
  component: PatternFirstPagePresenter,
}
export default meta

type Story = StoryObj<typeof PatternFirstPagePresenter>

export const WithData: Story = {
  render: (args) => (
    <PatternFirstPagePresenter
      isLoading={args.isLoading}
      errorMessage={args.errorMessage}
      data={args.data}
    />
  ),
  args: {
    isLoading: false,
    errorMessage: undefined,
    data: 'with data',
  },
}

export const Loading: Story = {
  render: (args) => (
    <PatternFirstPagePresenter
      isLoading={args.isLoading}
      errorMessage={args.errorMessage}
      data={args.data}
    />
  ),
  args: {
    isLoading: true,
    errorMessage: undefined,
    data: undefined,
  },
}

export const Error: Story = {
  render: (args) => (
    <PatternFirstPagePresenter
      isLoading={args.isLoading}
      errorMessage={args.errorMessage}
      data={args.data}
    />
  ),
  args: {
    isLoading: false,
    errorMessage: 'error message',
    data: undefined,
  },
}

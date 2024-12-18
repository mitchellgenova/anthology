import type { Meta, StoryObj } from '@storybook/react';
import { Callout } from './callout';

const meta = {
  title: 'Components/Callout',
  component: Callout,
  args: {
    title: 'An Important Message',
    children: 'This is a message that you should read.',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'information', 'success', 'warning', 'danger'],
    },
  },
} satisfies Meta<typeof Callout>;

export default meta;
type Story = StoryObj<typeof Callout>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Information: Story = {
  args: {
    variant: 'information',
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
  },
};

export const Danger: Story = {
  args: {
    variant: 'danger',
  },
};

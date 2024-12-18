import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Button',
    variant: 'primary',
    disabled: false,
    size: 'medium',
  },
  argTypes: {
    children: {
      name: 'Label',
      control: 'text',
      description: 'The text displayed on the button',
      table: {
        disable: true,
      },
    },
    disabled: { control: 'boolean' },
    variant: { control: 'select' },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    variant: 'destructive',
  },
};

export const Dark: Story = {
  parameters: {
    themes: {
      themeOverride: 'dark',
    },
  },
};

export const Mobile: Story = {
  parameters: {
    viewport: {
      defaultViewport: 'mobile1',
    },
  },
};

import type { PropsWithChildren } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

export type CalloutVariants = VariantProps<typeof variants>;

type CalloutProps = PropsWithChildren<{ title: string }> & CalloutVariants;

const variant = {
  primary: [
    'bg-primary-200',
    'border-primary-500',
    'text-primary-900',
    'dark:bg-primary-800',
    'dark:border-primary-900',
    'dark:text-primary-50',
  ],
  information: [
    'bg-information-200',
    'border-information-500',
    'text-information-900',
    'dark:bg-information-800',
    'dark:border-information-500',
    'dark:text-information-50',
  ],
  success: [
    'bg-success-200',
    'border-success-500',
    'text-success-900',
    'dark:bg-success-800',
    'dark:border-success-500',
    'dark:text-success-50',
  ],
  warning: [
    'bg-warning-200',
    'border-warning-500',
    'text-warning-900',
    'dark:bg-warning-800',
    'dark:border-warning-500',
    'dark:text-warning-50',
  ],
  danger: [
    'bg-danger-200',
    'border-danger-500',
    'text-danger-900',
    'dark:bg-danger-800',
    'dark:border-danger-500',
    'dark:text-danger-50',
  ],
  default: [
    'bg-gray-200',
    'border-gray-500',
    'text-gray-900',
    'dark:bg-gray-800',
    'dark:border-gray-500',
    'dark:text-gray-50',
  ],
};

const variations = ['primary', 'information', 'success', 'warning', 'danger', 'default'] as const;
type Variations = (typeof variations)[number];

const variants = cva(['p-4', 'rounded', 'border', 'shadow-md', 'space-y-4'], {
  variants: {
    variant,
  },
});

export const Callout = ({ title, children, variant }: CalloutProps) => (
  <div className={variants({ variant })}>
    <h2 className="font-semibold">{title}</h2>
    <p>{children}</p>
  </div>
);

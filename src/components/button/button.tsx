import { ComponentProps } from 'react';

import { variants, type ButtonVariants } from './button-variant';

export interface ButtonProps extends ComponentProps<'button'>, ButtonVariants {
  size?: 'small' | 'medium' | 'large';
}

export const Button = ({ variant = 'primary', size = 'medium', ...props }: ButtonProps) => {
  return <button className={variants({ variant, size })} {...props} />;
};

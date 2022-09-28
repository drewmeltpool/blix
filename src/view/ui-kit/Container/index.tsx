import { FC } from 'react';
import { cn } from 'src/utils';

import './container.scss';

interface IProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  children?: React.ReactNode;
}

export const Container: FC<IProps> = ({ children, className, size = 'lg' }) => {
  return <div className={cn('container', size, className)}>{children}</div>;
};

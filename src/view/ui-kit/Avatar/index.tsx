import { FC } from 'react';
import { cn } from 'src/utils';

import './avatar.scss';

interface IProps {
  src: string;
  size: 'md' | 'lg';
  className?: string;
  rounded?: boolean;
}

export const Avatar: FC<IProps> = ({ src, size, className, rounded }) => {
  return (
    <img
      src={src}
      className={cn('image', rounded && 'rounded', size, className)}
      alt="iamge"
    />
  );
};

import React from 'react';
import { typographyVariant, ETagVariant } from './variants';

import { cn } from 'src/utils';

import './typography.scss';

interface ITypography {
  variant?: keyof typeof ETagVariant;
  className?: string;
  tag?: keyof JSX.IntrinsicElements;
  title?: string | React.ReactNode;
  color?: string;
  children?: React.ReactNode;
}

export const Typography: React.FC<ITypography> = ({
  tag,
  variant,
  className,
  title,
  children,
  color,
}) => {
  const Tag = tag || (variant && typographyVariant[variant]) || 'p';

  return (
    <Tag style={{ color }} className={cn('typography', variant, className)}>
      {title ?? children}
    </Tag>
  );
};

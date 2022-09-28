import React, { JSXElementConstructor, useMemo } from 'react';

export const List = <T,>(props: {
  wrap:
    | keyof JSX.IntrinsicElements
    | JSXElementConstructor<{ children: JSX.Element[] }>;
  element: (_props: T, _idx: number) => React.ReactNode;
  keyExtractor: (_props: T, _idx: number) => string | number;
  data: T[];
  empty?: React.ReactNode | string;
  [key: string]: unknown;
}) => {
  const { wrap: Wrap, data, element, keyExtractor, empty, ...rest } = props;

  const components = useMemo(
    () =>
      data?.map((props: T, idx: number) => (
        <React.Fragment key={keyExtractor(props, idx)}>
          {element(props, idx)}
        </React.Fragment>
      )),
    [data, element, Wrap, keyExtractor, empty]
  );

  if (!data?.length) {
    return <>{empty}</>;
  }

  return <Wrap {...rest}>{components}</Wrap>;
};

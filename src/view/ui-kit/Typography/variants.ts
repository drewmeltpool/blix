export enum ETagVariant {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
  body1 = 'body1',
  body2 = 'body2',
  'body-bold' = 'body-bold',
  caption = 'caption',
}

export const typographyVariant: {
  [key in ETagVariant]: keyof JSX.IntrinsicElements;
} = {
    
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  body1: 'p',
  body2: 'p',
  'body-bold': 'p',
  caption: 'p',
};

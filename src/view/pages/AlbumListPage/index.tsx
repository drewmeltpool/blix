import { FC } from 'react';
import { AlbumListTemplate } from 'src/view/templates/AlbumListTemplate';

import { music } from 'src/data';

export const AlbumListPage: FC = () => {
  return <AlbumListTemplate music={music} />;
};

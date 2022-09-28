import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';

import { AlbumTemplate } from 'src/view/templates/AlbumTemplate';

import { music } from 'src/data';
import { IAlbum } from 'src/types';

export const AlbumPage: FC = () => {
  const params = useParams();

  const albumId = Number(params.albumId);

  const album = useMemo(
    () => music.find(({ id }) => id === albumId) as IAlbum,
    [albumId]
  );

  const tracks = useMemo(() => album?.tracks || [], [album]);

  return (
    <AlbumTemplate
      isExist={Boolean(album)}
      author={album?.author}
      image={album?.image}
      name={album?.name}
      tracks={tracks}
    />
  );
};

import { FC, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { music } from 'src/data';
import { SongTemplate } from 'src/view/templates/SongTemplate';

export const SongPage: FC = () => {
  const { albumId, trackId } = useParams();

  const album = useMemo(
    () => music.find(({ id }) => id === Number(albumId)),
    [albumId, trackId]
  );

  const track = useMemo(
    () => album?.tracks?.find(({ id }) => id === Number(trackId)),
    [album]
  );

  return <SongTemplate track={track} />;
};

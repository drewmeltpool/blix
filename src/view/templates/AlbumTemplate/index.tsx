import { FC } from 'react';
import { Track } from 'src/view/components/Track';
import { Container, List } from 'src/view/ui-kit';
import { AlbumHeader } from 'src/view/components/AlbumHeader';
import { ITrack } from 'src/types';

import './album.scss';

interface IProps {
  tracks: ITrack[];
  isExist: boolean;
  image: string;
  name: string;
  author: string;
}

export const AlbumTemplate: FC<IProps> = ({
  tracks,
  author,
  image,
  name,
  isExist,
}) => {
  return (
    <Container size="md">
      {isExist && (
        <AlbumHeader
          amountOfTracks={tracks.length}
          image={image}
          name={name}
          author={author}
        />
      )}
      <List
        wrap="div"
        className="track-list flex col gap-md"
        element={(props) => <Track {...props} />}
        data={tracks}
        empty={<>Empty</>}
        keyExtractor={({ id }) => id}
      />
    </Container>
  );
};

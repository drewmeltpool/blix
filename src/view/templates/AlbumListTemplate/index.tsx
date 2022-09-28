import { FC } from 'react';
import { Album } from 'src/view/components/Album';
import { Container, List, Typography } from 'src/view/ui-kit';

import { IAlbum } from 'src/types';

import './albumlist.scss';

interface IProps {
  music: IAlbum[];
}

export const AlbumListTemplate: FC<IProps> = ({ music }) => {
  return (
    <Container size="md">
      <Typography variant="h2" title="Albums" />
      <List
        wrap="div"
        className="album-list"
        data={music}
        keyExtractor={({ id }) => id}
        element={({ name, image, id, author, tracks }) => (
          <Album
            id={id}
            name={name}
            image={image}
            author={author}
            amountOfTracks={tracks.length}
          />
        )}
      />
    </Container>
  );
};

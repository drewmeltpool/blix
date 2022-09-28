import { FC } from 'react';
import { Container, Typography } from 'src/view/ui-kit';
import { ITrack } from 'src/types';

interface IProps {
  track?: ITrack;
}

export const SongTemplate: FC<IProps> = ({ track }) => {
  return (
    <Container size="md">
      {track ? (
        <div>
          <Typography variant="h2" title={track.name} />
          <Typography variant="h4" title={track.author} />
          <Typography variant="h6" title={track.description} />
          <Typography variant="h6" title={track.duration} />
          <audio controls src={track.song} />
        </div>
      ) : (
        <div>
          <Typography variant="h4" title="Do not exist" />
        </div>
      )}
    </Container>
  );
};

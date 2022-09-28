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
        <div className="flex col gap-md">
          <Typography variant="h3" title={track.name} />
          <Typography variant="h4" title={track.author} />
          <div className="flex gap-md">
            <Typography variant="body2" title={track.description} />
            <Typography variant="body-bold" title={track.duration} />
          </div>
          <audio controls src={track.song} className="w-100" />
        </div>
      ) : (
        <div>
          <Typography variant="h4" title="Do not exist" />
        </div>
      )}
    </Container>
  );
};

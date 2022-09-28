import { FC } from 'react';
import { Avatar, Typography } from 'src/view/ui-kit';

import './albumheader.scss';

interface IProps {
  name: string;
  image: string;
  author: string;
  amountOfTracks: number;
}

export const AlbumHeader: FC<IProps> = ({
  name,
  author,
  image,
  amountOfTracks,
}) => {
  return (
    <div className="album-header">
      <Avatar size="lg" src={image} rounded />
      <div>
        <div className="album-content">
          <Typography className="album-name" title={name} variant="h1" />
          <Typography className="album-author" title={author} variant="h3" />
        </div>
        <Typography className="album-tracks" variant="body1">
          <Typography tag="span" title="tracks:" />
          <Typography tag="span" title={amountOfTracks} />
        </Typography>
      </div>
    </div>
  );
};

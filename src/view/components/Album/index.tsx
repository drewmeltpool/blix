import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Typography } from 'src/view/ui-kit';

import './album.scss';

interface IProps {
  name: string;
  image: string;
  id: number;
  author: string;
  amountOfTracks: number;
}

export const Album: FC<IProps> = ({
  name,
  id,
  author,
  image,
  amountOfTracks,
}) => {
  return (
    <Link className="link" to={String(id)}>
      <div className="album">
        <Avatar size="md" src={image} rounded />
        <div className="album-content">
          <Typography className="album-name" title={name} variant="h4" />
          <Typography
            className="album-author"
            title={author}
            variant="body-bold"
          />
        </div>
        <Typography className="album-tracks" variant="body1">
          <Typography tag="span" title="tracks:" />
          <Typography tag="span" title={amountOfTracks} />
        </Typography>
      </div>
    </Link>
  );
};

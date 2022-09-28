import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Typography } from 'src/view/ui-kit';

import './track.scss';

interface IProps {
  name: string;
  id: number;
  author: string;
  description: string;
  duration: string;
  song: string;
}

export const Track: FC<IProps> = ({
  name,
  author,
  description,
  duration,
  id,
}) => {
  return (
    <Link to={String(id)} className="track link gap-md flex col">
      <Typography title={name} variant="h6" />
      <div className="flex gap-md">
        <Typography variant="body-bold" title={author} />
        <Typography title={description} />
      </div>
      <Typography title={duration} variant="caption" />
    </Link>
  );
};

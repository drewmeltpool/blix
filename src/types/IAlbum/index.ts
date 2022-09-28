import { ITrack } from '../ITrack';

export interface IAlbum {
  id: number;
  name: string;
  image: string;
  author: string;
  tracks: ITrack[];
}

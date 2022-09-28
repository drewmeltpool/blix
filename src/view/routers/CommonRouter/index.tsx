import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CommonLayout } from 'src/view/layouts/CommonLayout';

import { AlbumListPage, AlbumPage, SongPage } from 'src/view/pages';

export const CommonRouter: FC = () => {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route path="albums" element={<AlbumListPage />} />
        <Route path="albums/:albumId" element={<AlbumPage />} />
        <Route path="albums/:albumId/:trackId" element={<SongPage />} />
      </Route>
    </Routes>
  );
};

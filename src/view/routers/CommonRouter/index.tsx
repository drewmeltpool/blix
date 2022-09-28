import { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CommonLayout } from 'src/view/layouts/CommonLayout';

import { AlbumListPage, AlbumPage, SongPage } from 'src/view/pages';

export const CommonRouter: FC = () => {
  return (
    <Routes>
      <Route element={<CommonLayout />}>
        <Route path="" element={<AlbumListPage />} />
        <Route path="/:albumId" element={<AlbumPage />} />
        <Route path="/:albumId/:trackId" element={<SongPage />} />
      </Route>
    </Routes>
  );
};

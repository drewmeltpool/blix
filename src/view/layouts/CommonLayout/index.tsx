import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from 'src/view/components/Navbar';

export const CommonLayout: FC = () => {
  return (
    <div className="page">
      <Navbar />
      <Outlet />
    </div>
  );
};

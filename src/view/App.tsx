import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { CommonRouter } from 'src/view/routers';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <CommonRouter />
    </BrowserRouter>
  );
};

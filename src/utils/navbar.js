import Bar from '../pages/Bar';
import Home from '../pages/Home';
import Main from '../pages/Main';

export const navbarData = [
  {
    id: 1,
    path: '/',
    element: <Home />,
    child: [],
  },
  {
    id: 2,
    path: '/main-menu',
    element: <Main />,
    child: [],
  },
  {
    id: 3,
    title: 'Blog',
    path: '/bar-menu',
    element: <Bar />,
    child: [],
  },
];

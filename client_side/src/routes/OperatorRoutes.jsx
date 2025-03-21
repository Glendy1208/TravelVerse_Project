import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/admin/dashboard/default')));

// render - component-overview
const Color = Loadable(lazy(() => import('pages/admin/component-overview/color')));
const Typography = Loadable(lazy(() => import('pages/admin/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/admin/component-overview/shadows')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/admin/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const OperatorRoutes = {
  path: '/operator',
  element: <DashboardLayout />,
  children: [
    {
      index: true, // Menggunakan index untuk halaman default operator
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'typography',
      element: <Typography />
    },
    {
      path: 'color',
      element: <Color />
    },
    {
      path: 'shadow',
      element: <Shadow />
    },
    {
      path: 'sample-page',
      element: <SamplePage />
    }
  ]
};

export default OperatorRoutes;

import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from 'layout/Dashboard';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/admin/dashboard/default')));

// render - component-overview
const Wisata = Loadable(lazy(() => import('pages/wisata/component-overview/wisata')));
const Typography = Loadable(lazy(() => import('pages/admin/component-overview/typography')));
const Shadow = Loadable(lazy(() => import('pages/admin/component-overview/shadows')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/admin/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const WisataRoutes = {
  path: '/wisatawan',
  children: [
    {
      index: true, // Gunakan index untuk halaman default admin
      element: <DashboardDefault />
    },
    {
      path: 'dashboard',
      element: <DashboardDefault />
    },
    {
      path: 'wisata',
      element: <Wisata />
    }
  ]
};

export default WisataRoutes;

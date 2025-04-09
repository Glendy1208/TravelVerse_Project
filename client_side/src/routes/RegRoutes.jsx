import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from '../layout/AdminDashboard';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/admin/dashboard/default')));

// render - component-overview
const Daftar = Loadable(lazy(() => import('pages/operator/component-overview/daftar-wisata')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/admin/extra-pages/sample-page')));

// ==============================|| MAIN ROUTING ||============================== //

const RegRoutes = {
  path: '/operator',
  children: [
    {
      index: true, // Gunakan index untuk halaman default admin
      element: <DashboardDefault />
    },
    {
        path: 'daftar-wisata',
        element: <Daftar />
    }
  ]
};

export default RegRoutes;

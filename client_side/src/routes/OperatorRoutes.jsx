import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from '../layout/OperatorDashboard';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/operator/dashboard/default')));

// render - component-overview
const Keuangan = Loadable(lazy(() => import('pages/operator/component-overview/keuangan')));
const Wisata = Loadable(lazy(() => import('pages/operator/component-overview/wisata')));
const Transaksi = Loadable(lazy(() => import('pages/operator/component-overview/transaksi')));
// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/operator/extra-pages/sample-page')));

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
      element: <DashboardDefault />,
      children: [
        {
          path: 'default',
          element: <DashboardDefault/>
        }
      ]
    },
    {
      path: 'wisata',
      element: <Wisata />
    },
    {
      path: 'transaksi',
      element: <Transaksi />
    },
    {
      path: 'keuangan',
      element: <Keuangan />
    }
  ]
};

export default OperatorRoutes;

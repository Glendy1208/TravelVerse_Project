import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import DashboardLayout from '../layout/AdminDashboard';

// render- Dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/admin/dashboard/default')));

// render - component-overview
const Operator = Loadable(lazy(() => import('pages/admin/component-overview/operator')));
const Wisatawan = Loadable(lazy(() => import('pages/admin/component-overview/wisatawan')));
const WisataCategory = Loadable(lazy(() => import('pages/admin/component-overview/wisata_category')));

// ==============================|| MAIN ROUTING ||============================== //

const AdminRoutes = {
  path: '/admin',
  element: <DashboardLayout />,
  children: [
    {
      index: true, // Gunakan index untuk halaman default admin
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
      path: 'operator',
      element: <Operator />
    },
    {
      path: 'wisatawan',
      element: <Wisatawan />
    },
    {
      path: 'wisata_category',
      element: <WisataCategory />
    }
  ]
};

export default AdminRoutes;

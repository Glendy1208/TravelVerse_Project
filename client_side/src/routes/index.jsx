import { createBrowserRouter } from 'react-router-dom';

// project imports
import LoginRoutes from './LoginRoutes';
import AdminRoutes from './AdminRoutes';
import OperatorRoutes from './OperatorRoutes';
import WisataRoutes from './WisataRoutes';
import RegRoutes from './RegRoutes';

// ==============================|| ROUTING RENDER ||============================== //

const router = createBrowserRouter([LoginRoutes, AdminRoutes, OperatorRoutes, WisataRoutes, RegRoutes], { basename: import.meta.env.VITE_APP_BASE_NAME });

export default router;

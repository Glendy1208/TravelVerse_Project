// assets
import { UnorderedListOutlined } from '@ant-design/icons';

// icons
const icons = {
  UnorderedListOutlined
};

// ==============================|| MENU ITEMS -  Management ||============================== //

const managemnt = {
  id: 'group-management',
  title: 'Management',
  type: 'group',
  children: [
    {
      id: 'wisata_category',
      title: 'Wisata Category',
      type: 'item',
      url: '/admin/wisata_category',
      icon: icons.UnorderedListOutlined,
      breadcrumbs: false
    }
  ]
};

export default managemnt;

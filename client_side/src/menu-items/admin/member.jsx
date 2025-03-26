// assets
import { UnorderedListOutlined } from '@ant-design/icons';

// icons
const icons = {
  UnorderedListOutlined
};

// ==============================|| MENU ITEMS - Member List ||============================== //

const member = {
  id: 'group-member',
  title: 'List Members',
  type: 'group',
  children: [
    {
      id: 'operator',
      title: 'Operator',
      type: 'item',
      url: '/admin/operator',
      icon: icons.UnorderedListOutlined,
      breadcrumbs: false
    },
    {
      id: 'wisatawan',
      title: 'Wisatawan',
      type: 'item',
      url: '/admin/wisatawan',
      icon: icons.UnorderedListOutlined,
      breadcrumbs: false
    }
  ]
};

export default member;

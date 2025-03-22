// assets
import {
    AreaChartOutlined
  } from '@ant-design/icons';
  
  // icons
  const icons = {
    AreaChartOutlined
  };
  
  // ==============================|| MENU ITEMS - UTILITIES ||============================== //
  
  const keuangan = {
    id: 'keuangan',
    title: 'Keuangan',
    type: 'group',
    children: [
      {
        id: 'keuangan-main',
        title: 'Keuangan',
        type: 'item',
        url: '/operator/keuangan',
        icon: icons.AreaChartOutlined
      }
    ]
  };
  
  export default keuangan;
  